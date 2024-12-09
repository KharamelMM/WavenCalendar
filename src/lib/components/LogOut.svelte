<script lang="ts">
	import { logOut } from '$lib/supabase/auth';
</script>

<button on:click={logOut}>Se déconnecter</button>

<style>
	button {
		position: fixed;
		bottom: 1em;
		right: 1em;
	}
</style>
