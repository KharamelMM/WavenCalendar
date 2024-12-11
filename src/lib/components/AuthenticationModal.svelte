<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { logInStores } from '$lib/supabase/auth';
	import Info from './Info.svelte';
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

<Modal title={$_(t.INFO_WELCOME)}>
	{#if $loading}
		<div class="loading">
			<div class="circle"></div>
		</div>
	{:else if $error}
		<p>{$error.message}</p>
		<button class="primary" onclick={reset}>{$_(t.AUTHENTICATION_RETRY)}</button>
	{:else if $valid}
		<p>{$_(t.AUTHENTICATION_CHECK_EMAIL)}</p>
	{:else}
		<Info />

		<div>
			<b>{$_(t.AUTHENTICATION_LABEL_YOUR_EMAIL)}<span class="required">*</span> :</b>
		</div>
		<input
			type="email"
			onkeydown={onTextFieldKeyDown}
			placeholder={$_(t.AUTHENTICATION_PLACEHOLDER_EMAIL)}
			bind:value={email}
			autocomplete="email"
		/>
		<button class="primary" onclick={() => logIn(email)}>{$_(t.AUTHENTICATION_GET_LINK_BY_EMAIL)}</button>
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

	.required {
		color: var(--alizarin);
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
