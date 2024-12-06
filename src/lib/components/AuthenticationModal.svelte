<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import Modal from './Modal.svelte';

	let email: string;

	async function handleLogin() {
		try {
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) throw error;
			alert('Check your email for login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
		}
	}
</script>

<Modal title="Magic Link Connexion">
	<p>Actuellement, nous avons besoin de votre aide afin recomposer le cycle de récompenses journalière</p>
	<p>Pour cela, il est nécessaire pour nous que vous vous connectiez afin de partager les informations</p>
	<div>Votre Email:</div>
	<input type="email" placeholder="jean.dupont@gmail.com" bind:value={email} />
	<button class="primary" onclick={handleLogin}>Recevoir un email de connexion</button>
</Modal>
