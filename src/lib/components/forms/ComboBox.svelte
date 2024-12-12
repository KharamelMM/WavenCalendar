<script lang="ts" generics="T extends string">
	import I18n from '../I18n.svelte';
	import Field from './Field.svelte';
	import { _ } from 'svelte-i18n';

	export let title: string | undefined = undefined;

	export let values: T[] = [];
	export let value: T;
	export let required = false;
</script>

<Field {...{ title, required }}>
	<section>
		{#each values as v}
			<button class={v.toLowerCase()} class:active={value === v} onclick={() => (value = v)}><I18n key={v} /></button>
		{/each}
	</section>
</Field>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		gap: 0.5em;
	}
	button {
		border-bottom: 0.2em solid var(--color);
		font-size: 1em;
	}
	button.active {
		background-color: var(--headline);
		color: var(--bg);
	}
</style>
