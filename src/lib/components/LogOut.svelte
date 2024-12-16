<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { logOut } from '$lib/supabase/auth';
</script>

<button on:click={logOut}>{$_(t.DISCONNECT)}</button>

<style>
	button {
		position: fixed;
		top: 3.7em;
		left: 1em;
		background-color: var(--bg);
	}
</style>
