<script lang="ts">
	import { logInStores } from '$lib/supabase/auth';
	import Modal from './Modal.svelte';

	let email: string;
	const [valid, error, loading, logIn, reset] = logInStores();

	function onTextFieldKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			logIn(email);
		}
	}
</script>

<Modal title="Magic Link Connexion">
	{#if $loading}
		<div class="loading">
			<div class="circle"></div>
		</div>
	{:else if $error}
		<p>{$error.message}</p>
		<button class="primary" onclick={reset}>Réessayer</button>
	{:else if $valid}
		<p>Check your email for login link!</p>
	{:else}
		<p>Actuellement, nous avons besoin de votre aide afin recomposer le cycle de récompenses journalière</p>
		<p>Pour cela, il est nécessaire pour nous que vous vous connectiez afin de partager les informations</p>
		<div>Votre Email:</div>
		<input type="email" onkeydown={onTextFieldKeyDown} placeholder="jean.dupont@gmail.com" bind:value={email} />
		<button class="primary" onclick={() => logIn(email)}>Recevoir un email de connexion</button>
	{/if}
</Modal>

<style>
	button {
		border-radius: 0;
	}

	.circle {
		border: 0.2em solid var(--text);
		border-top-color: transparent;
		border-radius: 50%;
		width: 2em;
		height: 2em;

		animation: spin 1s linear infinite;
	}

	.loading {
		padding: 1em;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
