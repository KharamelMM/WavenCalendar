<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { RaretyType } from '$lib/types/RaretyType';
	import { RewardType } from '$lib/types/RewardType';

	export let filters: { [key in string]: boolean } = {};

	for (const rarety in RaretyType) {
		filters[rarety] = true;
	}

	for (const type in RewardType) {
		if (type !== RewardType.EQUIPMENT) {
			filters[type] = true;
		}
	}
</script>

<section>
	{#each Object.keys(filters) as filter}
		<div class="filter">
			<button
				onclick={() => (filters[filter] = !filters[filter])}
				class={`material-icon ${filter.toLowerCase()}`}
				class:checked={filters[filter]}
			>
				{#if filters[filter]}
					check
				{/if}
			</button>
			{$_(filter)}
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(7.5em, 1fr));
		gap: 0.1em;
	}

	.filter {
		display: flex;
		align-items: center;
		gap: 0.25em;

		font-size: 1em;
	}

	button {
		background-color: var(--bg-secondary);
		width: 1em;
		height: 1em;
		border-radius: 0.1em;
		padding: 0;
		font-size: 1em;
	}
	button.checked {
		background-color: var(--color);
	}
</style>
