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
	import { setReward } from '$lib/database/calendar';
	import { currentProfile } from '$lib/utils/profile.store';
	import { CYCLE_START } from '$lib/utils/const';
	import { offsetInCycle } from '$lib/utils/date';
	import { scale } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import type { Calendar } from '$lib/types/Calendar';
	import CycleDayImage from './CycleDayImage.svelte';

	export let reward: Reward | undefined;
	export let index: number;
	export let currentIndex: number = -1;
	export let personalCalendar: Calendar = [];
	let validated = false;
	$: primary = index === currentIndex;
	$: if (primary) {
		validated = personalCalendar[offsetInCycle(new Date(), CYCLE_START)]?.validated ?? false;
	}
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

	async function saveReward() {
		if (!reward) {
			throw new Error('No reward to save');
		}
		if (!primary) {
			throw new Error('Cannot save a reward that is not the current day');
		}
		const rewardToSave = { ...reward };
		rewardToSave.cycle_index = offsetInCycle(new Date(), CYCLE_START);
		rewardToSave.validated = true;
		await setReward(get(currentProfile), rewardToSave);
		validated = true;
	}
</script>

{#if !reward || !$localStorageStore.filters || (reward.type === RewardType.COMPANION || reward.type === RewardType.EQUIPMENT ? $localStorageStore.filters[reward.rarety] : $localStorageStore.filters[reward.type]) || primary}
	<Tooltip
		title={$momentStore()
			.add(index - currentIndex, 'days')
			.format('dddd DD MMMM YYYY')}
	>
		<section class:primary>
			<Card width="10em" height="8.5em" {...{ primary, outline: primary }}>
				<div class="header">
					<small>
						{#if currentIndex > 0}
							{$momentStore()
								.add(index - currentIndex, 'days')
								.format('DD MMM')}
						{/if}
					</small>
					<small>{index}</small>
				</div>
				<b>
					{#if reward}
						<div class="content">
							<CycleDayImage {reward} />
							<div class="text">
								{$_(reward.type)}
								{#if reward.type === RewardType.EQUIPMENT || reward.type === RewardType.COMPANION}
									{$_(reward.rarety)}
								{:else if reward.type === RewardType.RUNES || reward.type === RewardType.CHEST}
									{$_(reward.equipment)}
								{/if}
							</div>
						</div>
					{:else}
						-
					{/if}
				</b>
				{#if reward && primary && !validated}
					<button
						transition:scale={{ easing: backOut, duration: 500 }}
						onclick={saveReward}
						class="validate material-icon"
					>
						check_circle
					</button>
				{/if}
			</Card>
		</section>
	</Tooltip>
{/if}

<style>
	section {
		margin: 0.25em;
	}
	.primary {
		position: relative;
		transform: scale(1.2);
		z-index: 2;
		box-shadow: 0 0 5em black;
	}

	.header {
		display: flex;
		justify-content: space-between;
		margin: 0 -0.5em;
	}

	button.validate {
		color: var(--nephritis) !important;
		border-radius: 50%;
		padding: 0;
		position: absolute;
		bottom: 0.25em;
		right: 0.25em;
		background-color: var(--headline);
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.content .text {
		text-align: center;
		font-size: 0.8em;
	}
</style>
