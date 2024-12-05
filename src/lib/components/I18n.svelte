<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';

	export let key: keyof typeof t;
</script>

{$_(key)}
