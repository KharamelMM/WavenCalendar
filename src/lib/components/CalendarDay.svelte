<script lang="ts">
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import { localStorageStore } from '$lib/utils/localstorage.store';
	import Tooltip from './Tooltip.svelte';
	import { _ } from 'svelte-i18n';
	import { onDestroy } from 'svelte';
	import { get } from 'svelte/store';
	import { getRewardsClass } from '$lib/utils/rewards';

	export let currentDate: Date;
	export let dayOfMonth: number;
	export let reward: Reward | undefined = undefined;
	export let onclick: () => void;

	const today = new Date();
	let btnClass: string | undefined = '';
	const unsubscribe = localStorageStore.subscribe((state) => {
		btnClass = getRewardsClass(reward, state.filters);
	});
	$: {
		btnClass = getRewardsClass(reward, get(localStorageStore).filters);
	}

	function getTooltip() {
		if (reward) {
			let tooltip = `${reward.amount}× ${$_(reward.type)}`;
			switch (reward.type) {
				case RewardType.RUNES:
				case RewardType.CHEST:
					tooltip += ` ${$_(reward.equipment)}`;
					break;
				case RewardType.COMPANION:
				case RewardType.EQUIPMENT:
					tooltip = `${reward.amount}× ${$_(reward.type)} ${$_(reward.rarety)}`;
					break;
			}
			return tooltip;
		}
	}

	onDestroy(() => {
		unsubscribe();
	});
</script>

<Tooltip title={getTooltip()}>
	<button
		class:today={currentDate.toDateString() === today.toDateString()}
		class={btnClass}
		{onclick}
		disabled={currentDate > today}
	>
		<div>{dayOfMonth}</div>
	</button>
</Tooltip>

<style>
	button {
		width: 100%;
		border-style: solid;
		border-color: var(--color);
		color: var(--headline);
		font-family: roboto;
		border-radius: 0.5em;
		border-width: 0.2em;
	}

	button:disabled {
		opacity: 0.5;
	}

	.today {
		--color: var(--headline);
		background-color: var(--color);
		color: var(--bg);
		transform: scale(1.2);
	}
</style>
