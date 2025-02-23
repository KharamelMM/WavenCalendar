<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { currentProfile } from '$lib/utils/profile.store';
	import Modal from './Modal.svelte';
	import { get } from 'svelte/store';
	import { localStorageStore } from '$lib/utils/localstorage.store';
	import { DEFAULT_PROFILE_NAME } from '$lib/utils/const';

	export let onclose: (() => void) | undefined = undefined;
	let newProfileName = '';

	function onCreateProfile() {
		if (newProfileName === '') {
			return;
		}
		localStorageStore.update((state) => {
			const profiles = state.profiles;
			if (profiles) {
				profiles[newProfileName] = [];
			}
			return { ...state, profiles };
		});
		useProfile(newProfileName);
		newProfileName = '';
	}

	function onDeleteProfile(name: string) {
		localStorageStore.update((state) => {
			const profiles = state.profiles;
			if (profiles) {
				delete profiles[name];
			}
			return { ...state, profiles };
		});
		if (name === get(currentProfile)) {
			useProfile(Object.keys(get(localStorageStore).profiles)[0]);
		}
	}

	function useProfile(name: string) {
		currentProfile.set(name);
		if (onclose) {
			onclose();
		}
	}
</script>

<Modal title={$currentProfile === DEFAULT_PROFILE_NAME ? $_(t.PROFILE_DEFAULT) : $currentProfile} {onclose}>
	<div>
		{$_(t.PROFILE_INFO)}
	</div>
	<div class="profiles">
		{#each Object.keys($localStorageStore.profiles || {}) as profile}
			<div>
				<button onclick={() => useProfile(profile)}>
					{#if profile === DEFAULT_PROFILE_NAME}
						{$_(t.PROFILE_DEFAULT)}
					{:else}
						{profile}
					{/if}
				</button>

				{#if profile !== DEFAULT_PROFILE_NAME}
					<button
						class="material-icon delete-profile"
						onclick={() => {
							if (confirm($_(t.PROFILE_DELETE_CONFIRM))) {
								onDeleteProfile(profile);
							}
						}}>delete</button
					>
				{/if}
			</div>
		{/each}
	</div>

	<div>
		<b>{$_(t.PROFILE_CREATE_LABEL)}<span class="required">*</span> :</b>
	</div>
	<input type="text" bind:value={newProfileName} placeholder={$_(t.PROFILE_CREATE_PLACEHOLDER)} />
	<button onclick={onCreateProfile}>{$_(t.PROFILE_CREATE)}</button>
</Modal>

<style>
	.profiles {
		padding: 1em 0;
	}

	.profiles > div {
		display: flex;
		justify-content: space-between;
	}

	.profiles > div:nth-child(odd) {
		background-color: color-mix(in srgb, var(--bg) 20%, var(--bg-secondary) 80%);
	}
	.delete-profile {
		color: var(--alizarin);
	}

	button {
		font-size: 1em;
	}

	.required {
		color: var(--alizarin);
	}
</style>
