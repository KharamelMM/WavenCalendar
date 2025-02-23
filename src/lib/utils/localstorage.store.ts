import { get, writable, type Updater } from 'svelte/store';
import { browser } from '$app/environment';
import type { Calendar } from '$lib/types/Calendar';

export type LocalStorageType = {
	[key: string]: unknown;
	filters?: { [key in string]: boolean };
	profiles: { [key in string]: Calendar };
};

function getLocalStorage() {
	const store = writable<LocalStorageType>({ profiles: { default: [] } });
	const { subscribe, set } = store;

	if (browser && localStorage.storable) {
		const localStorageValue = JSON.parse(localStorage.storable) as LocalStorageType;
		if (!Object.hasOwn(localStorageValue, 'profiles')) {
			localStorageValue.profiles = { default: [] };
			localStorage.storable = JSON.stringify(localStorageValue);
		}
		set(localStorageValue);
	}

	return {
		subscribe,
		set: (newStore: LocalStorageType) => {
			if (browser) {
				localStorage.storable = JSON.stringify(newStore);
			}
			set(newStore);
		},
		update: (callback: Updater<LocalStorageType>) => {
			const newStore = callback(get(store));

			if (browser) {
				localStorage.storable = JSON.stringify(newStore);
			}
			set(newStore);
		}
	};
}

export const localStorageStore = getLocalStorage();
