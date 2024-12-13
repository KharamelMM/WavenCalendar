import { get, writable, type Updater } from 'svelte/store';
import { browser } from '$app/environment';

type LocalStorageType = { [key: string]: unknown; filters?: { [key in string]: boolean } };

function getLocalStorage() {
	const store = writable<LocalStorageType>({});
	const { subscribe, set } = store;

	if (browser && localStorage.storable) {
		set(JSON.parse(localStorage.storable));
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
