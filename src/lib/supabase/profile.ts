import { supabase } from './client';

const TABLE_NAME = 'T_Profile';

export async function getProfiles() {
	const response = await supabase.from(TABLE_NAME).select();
	if (response.error) {
		throw response.error;
	}
	return response.data.map((profile) => profile.name);
}

export async function createProfile(name: string) {
	const response = await supabase.from(TABLE_NAME).insert({ name }).select();
	if (response.error) {
		throw response.error;
	}
	return response.data;
}

export async function deleteProfile(name: string) {
	const response = await supabase.from(TABLE_NAME).delete().match({ name }).select();
	if (response.error) {
		throw response.error;
	}
	return response.data[0];
}
