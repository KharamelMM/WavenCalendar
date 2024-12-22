<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import { localStorageStore } from '$lib/utils/localstorage.store';
	import { get } from 'svelte/store';
	import { _ } from 'svelte-i18n';
	import { onDestroy } from 'svelte';
	import { getRewardsClass } from '$lib/utils/rewards';
	import { momentStore } from '$lib/utils/moment.store';
	import Tooltip from '$lib/components/Tooltip.svelte';

	export let reward: Reward | undefined;
	export let index: number;
	export let currentIndex: number = -1;
	$: primary = index === currentIndex;
	let cardClass: string | undefined = '';

	const unsubscribe = localStorageStore.subscribe((state) => {
		cardClass = getRewardsClass(reward, state.filters);
	});
	$: {
		cardClass = getRewardsClass(reward, get(localStorageStore).filters);
	}
	onDestroy(() => {
		unsubscribe();
	});
</script>

<Tooltip
	title={$momentStore()
		.add(index - currentIndex, 'days')
		.format('dddd DD MMMM YYYY')}
>
	<Card classes={cardClass} width="10em" height="3.5em" {...{ primary, outline: primary }}>
		<div class="header">
			<div>
				{#if currentIndex > 0}
					{$momentStore()
						.add(index - currentIndex, 'days')
						.format('DD MMM')}
				{/if}
			</div>
			<div>{index}</div>
		</div>
		<b>
			{#if reward}
				{reward.amount}x {$_(reward.type)}
				{#if reward.type === RewardType.EQUIPMENT || reward.type === RewardType.COMPANION}
					{$_(reward.rarety)}
				{:else if reward.type === RewardType.RUNES || reward.type === RewardType.CHEST}
					{$_(reward.equipment)}
				{/if}
			{:else}
				-
			{/if}
		</b>
	</Card>
</Tooltip>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		margin: 0 -0.5em;
	}
</style>
