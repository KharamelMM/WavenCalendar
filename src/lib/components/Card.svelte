<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { backOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	export let title: string | undefined = undefined;
	export let i18nTitleKey: keyof typeof t | undefined = undefined;
	export let onclose: (() => void) | undefined = undefined;
</script>

<section transition:scale={{ easing: backOut, duration: 200 }}>
	<header>
		{#if onclose}
			<button onclick={onclose} class="material-icon">close</button>
		{/if}
		{#if title}
			<h3>{title}</h3>
		{:else if i18nTitleKey}
			<h3>{$_(i18nTitleKey)}</h3>
		{/if}
	</header>
	<div class="body">
		<slot />
	</div>
</section>

<style>
	header {
		display: flex;
		align-items: center;
		gap: 2em;
		padding: 0;
	}

	button {
		box-shadow: none !important;
		width: auto;
	}
	h3 {
		text-align: center;
		margin: 0;
	}
	section {
		background-color: var(--bg-secondary);
		padding: 0.75em 1em;

		width: fit-content;
		border-radius: 0.5em;
		max-width: 50em;
	}

	.body {
		padding: 0 0.5em;
	}
</style>
