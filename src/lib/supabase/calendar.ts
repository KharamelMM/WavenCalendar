import type { Calendar } from '$lib/types/Calendar';
import type { Reward } from '$lib/types/Reward';
import { localStorageStore } from '$lib/utils/localstorage.store';
import { get } from 'svelte/store';

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
