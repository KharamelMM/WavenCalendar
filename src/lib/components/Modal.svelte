<script lang="ts">
	import { t } from '$lib/i18n';
	import { stopPropagation } from 'svelte/legacy';
	import Card from './Card.svelte';
	import { fade } from 'svelte/transition';

	export let title: string | undefined = undefined;
	export let i18nTitleKey: keyof typeof t | undefined = undefined;
	export let onclose: (() => void) | undefined = undefined;

	let mouseDown = false;

	function fnStopPropagation(e: MouseEvent) {
		e.stopPropagation();
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<section
	transition:fade={{ duration: 200 }}
	onmousedown={() => (mouseDown = true)}
	onmouseup={() => {
		if (mouseDown) {
			mouseDown = false;
			onclose?.();
		}
	}}
>
	<div onmousedown={fnStopPropagation} onmouseup={fnStopPropagation}>
		<Card {...{ title, i18nTitleKey, onclose }}><slot /></Card>
	</div>
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
