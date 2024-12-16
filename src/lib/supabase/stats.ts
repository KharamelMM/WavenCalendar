import { supabase } from './client';

const TABLE_NAME = 'V_Rewards_Per_Day';

export async function getStats() {
	const response = await supabase.from(TABLE_NAME).select();
	if (response.error) {
		throw response.error;
	}
	return response.data;
}
