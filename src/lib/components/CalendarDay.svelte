<script lang="ts">
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import Tooltip from './Tooltip.svelte';
	import { _ } from 'svelte-i18n';

	export let currentDate: Date;
	export let dayOfMonth: number;
	export let reward: Reward | undefined = undefined;
	export let onclick: () => void;

	const today = new Date();

	function getClass() {
		if (reward) {
			if (reward.type === RewardType.EQUIPMENT) {
				return reward.rarety.toLowerCase();
			} else {
				return reward.type.toLowerCase();
			}
		}
	}
</script>

<Tooltip title={reward ? `${reward.amount}× ${$_(reward.type)}` : undefined}>
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
		--color: transparent;

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

	.gems {
		--color: var(--amethyst);
	}

	.kamas {
		--color: var(--sun-flower);
	}

	.infinite {
		--color: var(--carrot);
	}

	.krosmic {
		--color: var(--wisteria);
	}

	.rare {
		--color: var(--peter-river);
	}

	.common {
		--color: var(--asbestos);
	}

	.wakfu {
		--color: var(--belize-hole);
	}

	.chest {
		--color: var(--pomegranate);
	}

	.runes {
		--color: var(--nephritis);
	}
</style>
