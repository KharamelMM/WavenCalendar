import type { Calendar } from '$lib/types/Calendar';
import type { Reward } from '$lib/types/Reward';
import { localStorageStore } from '$lib/utils/localstorage.store';
import { get } from 'svelte/store';
import { supabase } from './client';
import { DEFAULT_PROFILE_NAME } from '$lib/utils/const';
import type { PostgrestSingleResponse } from '@supabase/supabase-js';
import type { Tables } from './database.types';

export async function setReward(profile: string, reward: Reward) {
	localStorageStore.update((state) => {
		state.profiles[profile][reward.cycle_index] = reward;
		return state;
	});
	return reward;
}

export async function deleteReward(profile: string, cycleOffset: number) {
	let response: Reward | undefined;
	localStorageStore.update((state) => {
		response = state.profiles[profile][cycleOffset];
		state.profiles[profile][cycleOffset] = undefined;
		return state;
	});
	return response;
}

export async function getCalendar(profile: string): Promise<Calendar> {
	return get(localStorageStore).profiles[profile];
}

export async function exportAllFromSupabase(): Promise<{ [key in string]: Calendar }> {
	console.log('Start exporting all profiles from Supabase');
	const response = await supabase.from('T_Profile').select();
	if (response.error) {
		throw response.error;
	}
	const profiles = [undefined, ...response.data.map((profile) => profile.name)];
	const result = {} as { [key in string]: Calendar };
	for (const profile of profiles) {
		result[profile ?? DEFAULT_PROFILE_NAME] = await exportProfileFromSupabase(profile);
	}
	return result;
}

async function exportProfileFromSupabase(profile: string | null = null): Promise<Calendar> {
	console.log(`Start exporting profile ${profile} from Supabase`);
	let response: PostgrestSingleResponse<Tables<'T_Reward'>[]>;
	if (profile) {
		response = await supabase.from('T_Reward').select().eq('profile_name', profile);
	} else {
		response = await supabase.from('T_Reward').select().is('profile_name', null);
	}

	if (response.error) {
		throw response.error;
	}
	const datas = response.data;

	const calendar: Calendar = [];
	for (const data of datas) {
		const reward = data as Reward;
		calendar[reward.cycle_index] = reward;
	}
	return calendar;
}
