<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import { localStorageStore } from '$lib/utils/localstorage.store';
	import { get } from 'svelte/store';
	import { _ } from 'svelte-i18n';
	import { onDestroy } from 'svelte';
	import { getRewardsClass } from '$lib/utils/rewards';

	export let reward: Reward | undefined;
	export let index: number;
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

<Card classes={cardClass} title={`${index} `} width="10em" height="3.5em">
	{#if reward}
		{reward.amount}x {$_(reward.type)}
		{#if reward.type === RewardType.EQUIPMENT || reward.type === RewardType.COMPANION}
			{$_(reward.rarety)}
		{:else if reward.type === RewardType.RUNES || reward.type === RewardType.CHEST}
			{$_(reward.equipment)}
		{/if}
	{:else}
		?
	{/if}
</Card>
