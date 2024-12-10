<script lang="ts">
	import { t } from '$lib/i18n';
	import Card from './Card.svelte';
	import { fade } from 'svelte/transition';

	export let title: string | undefined = undefined;
	export let i18nTitleKey: keyof typeof t | undefined = undefined;
	export let onclose: (() => void) | undefined = undefined;
</script>

<section transition:fade={{ duration: 200 }}>
	<Card {...{ title, i18nTitleKey, onclose }}><slot /></Card>
</section>

<style>
	section {
		top: 0;
		position: fixed;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		z-index: 5;
		background-color: color-mix(in srgb, var(--bg) 80%, transparent 20%);
		backdrop-filter: blur(5px);

		overflow: hidden;
	}
</style>
