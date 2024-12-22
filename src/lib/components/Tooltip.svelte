<script lang="ts">
	export let title: string | undefined = undefined;
</script>

<section class="tooltip">
	<slot />
	{#if title}
		<span class="text">{title}</span>
	{/if}
</section>

<style>
	.tooltip {
		position: relative;
	}

	.text {
		visibility: hidden;
		white-space: nowrap;
		width: auto;
		background-color: var(--bg);
		color: var(--headline);
		text-align: center;
		padding: 5px 10px;
		border-radius: 6px;

		/* Position the tooltip text */
		position: absolute;
		z-index: 1;
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);

		/* Fade in tooltip */
		opacity: 0;
		transition: 300ms;

		pointer-events: none;
		text-transform: capitalize;
	}

	.text::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-width: 5px;
		border-style: solid;
		border-color: var(--bg) transparent transparent transparent;
	}

	.tooltip:hover .text {
		transition-delay: 250ms;
		visibility: visible;
		opacity: 1;
	}
</style>
