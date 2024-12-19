<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
	import { backOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';

	export let title: string | undefined = undefined;
	export let i18nTitleKey: keyof typeof t | undefined = undefined;
	export let onclose: (() => void) | undefined = undefined;

	export let outline = false;
	export let modal = false;

	export let classes = '';

	export let width: string = 'auto';
	export let height: string = 'auto';
</script>

<section
	transition:scale={{ easing: backOut, duration: 200 }}
	class:outline
	class:modal
	class={classes}
	style="width: {width}; height: {height}"
>
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
		font-size: 1em;
		text-align: center;
		margin: 0;
		text-transform: capitalize;
	}
	section {
		background-color: var(--bg-secondary);

		border: 0.2em solid var(--color);
		padding: 0.5em 0.75em;

		width: fit-content;
		border-radius: 0.5em;
		max-width: 50em;
	}

	.body {
		padding: 0 0.5em;
	}

	.outline {
		outline: 0.2em solid var(--text);
	}

	@media (max-width: 850px) {
		section.modal {
			width: 90vw;
			height: 80vh;
			overflow: auto;
		}
	}
</style>
