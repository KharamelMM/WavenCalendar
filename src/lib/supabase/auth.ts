import { writable, type Writable } from 'svelte/store';
import { supabase } from './client';

export function logInStores() {
	const loadingStore: Writable<boolean> = writable(false);
	const errorStore: Writable<Error | null> = writable(null);
	const validStore: Writable<boolean> = writable(false);

	async function logIn(email: string) {
		reset();
		loadingStore.set(true);
		let error: Error | null = null;

		try {
			error = (await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.toString() } }))
				.error;
		} catch (e: unknown) {
			if (e instanceof Error) {
				error = e;
			}
		}

		if (error) {
			errorStore.set(error);
		} else {
			validStore.set(true);
		}

		loadingStore.set(false);
	}

	function reset() {
		loadingStore.set(false);
		errorStore.set(null);
		validStore.set(false);
	}

	return [validStore, errorStore, loadingStore, logIn, reset] as const;
}

export async function logOut() {
	return supabase.auth.signOut();
}
