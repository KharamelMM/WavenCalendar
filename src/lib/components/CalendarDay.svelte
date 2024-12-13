<script lang="ts">
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import Tooltip from './Tooltip.svelte';
	import { _ } from 'svelte-i18n';

	export let filters: { [key in string]: boolean } = {};
	export let currentDate: Date;
	export let dayOfMonth: number;
	export let reward: Reward | undefined = undefined;
	export let onclick: () => void;

	const today = new Date();

	function getClass() {
		if (reward) {
			if (reward.type === RewardType.EQUIPMENT) {
				if (filters[reward.rarety]) {
					return reward.rarety.toLowerCase();
				}
			} else {
				if (filters[reward.type]) {
					return reward.type.toLowerCase();
				}
			}
		}
	}

	function getTooltip() {
		if (reward) {
			let tooltip = `${reward.amount}× ${$_(reward.type)}`;
			switch (reward.type) {
				case RewardType.RUNES:
				case RewardType.CHEST:
					tooltip += ` ${$_(reward.equipment)}`;
					break;
				case RewardType.EQUIPMENT:
					tooltip = `${reward.amount}× ${$_(reward.item)} ${$_(reward.rarety)}`;
					break;
			}
			return tooltip;
		}
	}
</script>

<Tooltip title={getTooltip()}>
	<button
		class:today={currentDate.toDateString() === today.toDateString()}
		class={getClass()}
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
