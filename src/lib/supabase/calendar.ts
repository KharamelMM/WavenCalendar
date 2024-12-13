import type { Calendar } from '$lib/types/Calendar';
import type { Reward } from '$lib/types/Reward';
import type { PostgrestSingleResponse } from '@supabase/supabase-js';
import { supabase } from './client';
import type { Tables, TablesInsert } from './database.types';

const TABLE_NAME = 'T_Reward';

export async function setReward(profile: string | undefined, reward: TablesInsert<typeof TABLE_NAME>) {
	const response = await supabase
		.from(TABLE_NAME)
		.upsert({ ...reward, profile_name: profile }, { onConflict: 'user_id, profile_name, cycle_index' })
		.select();
	if (response.error) {
		throw response.error;
	}
	return response.data[0];
}

export async function deleteReward(profile: string | undefined, cycleOffset: number) {
	let response: PostgrestSingleResponse<Tables<typeof TABLE_NAME>[]>;
	if (profile) {
		response = await supabase
			.from(TABLE_NAME)
			.delete()
			.match({ profile_name: profile, cycle_index: cycleOffset })
			.select();
	} else {
		response = await supabase
			.from(TABLE_NAME)
			.delete()
			.match({ cycle_index: cycleOffset })
			.is('profile_name', null)
			.select();
	}
	if (response.error) {
		throw response.error;
	}
	return response.data[0];
}

export async function getCalendar(profile: string | null = null): Promise<Calendar> {
	let response: PostgrestSingleResponse<Tables<typeof TABLE_NAME>[]>;
	if (profile) {
		response = await supabase.from(TABLE_NAME).select().eq('profile_name', profile);
	} else {
		response = await supabase.from(TABLE_NAME).select().is('profile_name', null);
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
