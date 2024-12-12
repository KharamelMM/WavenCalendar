<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';

	export let key: string;
</script>

{$_(key)}
