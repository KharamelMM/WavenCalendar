import type { Calendar } from '$lib/types/Calendar';
import type { Reward } from '$lib/types/Reward';
import { supabase } from './client';
import type { TablesInsert } from './database.types';

export async function setReward(reward: TablesInsert<'T_Reward'>) {
	const response = await supabase.from('T_Reward').upsert(reward).select();
	if (response.error) {
		throw response.error;
	}
	return response.data[0];
}

export async function deleteReward(cycleOffset: number) {
	const response = await supabase.from('T_Reward').delete().match({ cycle_index: cycleOffset }).select();
	if (response.error) {
		throw response.error;
	}
	return response.data[0];
}

export async function getCalendar(): Promise<Calendar> {
	const response = await supabase.from('T_Reward').select();
	if (response.error) {
		throw response.error;
	}
	const datas = response.data;
	console.log(datas);

	const calendar: Calendar = [];
	for (const data of datas) {
		const reward = data as Reward;
		calendar[reward.cycle_index] = reward;
	}
	return calendar;
}
