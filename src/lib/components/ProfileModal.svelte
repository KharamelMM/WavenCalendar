<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { createProfile, deleteProfile, getProfiles } from '$lib/supabase/profile';
	import { currentProfile } from '$lib/utils/profile.store';
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';

	export let onclose: (() => void) | undefined = undefined;
	let newProfileName = '';
	let profiles: string[] = [];

	function onCreateProfile() {
		if (newProfileName === '') {
			return;
		}
		createProfile(newProfileName);
		profiles = [...profiles, newProfileName];
		newProfileName = '';
	}

	function onDeleteProfile(name: string) {
		deleteProfile(name);
		profiles = profiles.filter((profile) => profile !== name);
	}

	function useProfile(name: string | undefined) {
		currentProfile.set(name);
		if (onclose) {
			onclose();
		}
	}

	onMount(async () => {
		profiles = await getProfiles();
	});
</script>

<Modal title={$currentProfile ?? $_(t.PROFILE_DEFAULT)} {onclose}>
	<div>
		{$_(t.PROFILE_INFO)}
	</div>
	<div class="profiles">
		<div>
			<button onclick={() => useProfile(undefined)}>
				{$_(t.PROFILE_DEFAULT)}
			</button>
		</div>
		{#each profiles as profile}
			<div>
				<button onclick={() => useProfile(profile)}>
					{profile}
				</button>

				<button class="material-icon delete-profile" onclick={() => onDeleteProfile(profile)}>delete</button>
			</div>
		{/each}
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
</style>
