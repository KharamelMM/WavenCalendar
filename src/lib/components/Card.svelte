<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';

	export let title: string | undefined = undefined;
	export let i18nTitleKey: keyof typeof t | undefined = undefined;
</script>

<section>
	{#if title}
		<h3>{title}</h3>
	{:else if i18nTitleKey}
		<h3>{$_(i18nTitleKey)}</h3>
	{/if}
	<slot />
</section>

<style>
	h3 {
		text-align: center;
		margin: 0;
	}
	section {
		background-color: var(--bg-secondary);

		padding: 0.75em 1.5em;
		width: fit-content;
		border-radius: 0.5em;
	}
</style>
