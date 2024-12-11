import { writable } from 'svelte/store';

export const currentProfile = writable<string | undefined>(undefined);
