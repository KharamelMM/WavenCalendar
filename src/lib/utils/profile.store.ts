import { writable } from 'svelte/store';
import { DEFAULT_PROFILE_NAME } from './const';

export const currentProfile = writable<string>(DEFAULT_PROFILE_NAME);
