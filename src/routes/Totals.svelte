<script lang="ts">
	import type { Calendar } from '$lib/types/Calendar';
	import { RaretyType } from '$lib/types/RaretyType';
	import type { Reward } from '$lib/types/Reward';
	import { RewardType } from '$lib/types/RewardType';
	import CycleDay from './CycleDay.svelte';

	export let cycle: Calendar = [];
	const totalRewards: Reward[] = [];
	const rewardOrder = [
		RewardType.GEMS,
		RewardType.KAMAS,
		RewardType.WAKFU,
		RewardType.RUNES,
		RewardType.CHEST,
		RewardType.EQUIPMENT,
		RewardType.COMPANION
	];
	const raretyOrder = [RaretyType.COMMON, RaretyType.RARE, RaretyType.KROSMIC, RaretyType.INFINITE];

	for (const rewardType of rewardOrder) {
		if (rewardType === RewardType.RUNES || rewardType === RewardType.CHEST) {
			const equipmentTotals: { [key: string]: Reward } = {};

			for (const reward of cycle) {
				if (reward && reward.type === rewardType && reward.equipment) {
					if (!equipmentTotals[reward.equipment]) {
						equipmentTotals[reward.equipment] = {
							type: rewardType,
							amount: 0,
							cycle_index: -1,
							equipment: reward.equipment
						} as Reward;
					}
					equipmentTotals[reward.equipment].amount += reward.amount;
				}
			}

			totalRewards.push(...Object.values(equipmentTotals));
		} else if (rewardType === RewardType.COMPANION || rewardType === RewardType.EQUIPMENT) {
			const raretyTotals: { [key: string]: Reward } = {};

			for (const reward of cycle) {
				if (reward && reward.type === rewardType && reward.rarety) {
					if (!raretyTotals[reward.rarety]) {
						raretyTotals[reward.rarety] = {
							type: rewardType,
							amount: 0,
							cycle_index: -1,
							rarety: reward.rarety
						} as Reward;
					}
					raretyTotals[reward.rarety].amount += reward.amount;
				}
			}
			// Sort raretyTotals by raretyOrder
			const sortedRaretyTotals: { [key: string]: Reward } = {};
			for (const rarety of raretyOrder) {
				if (raretyTotals[rarety]) {
					sortedRaretyTotals[rarety] = raretyTotals[rarety];
				}
			}
			// Push sorted raretyTotals to totalRewards
			totalRewards.push(...Object.values(sortedRaretyTotals));
		} else {
			const totalReward = { type: rewardType, amount: 0, cycle_index: -1 } as Reward;

			for (const reward of cycle) {
				if (reward && reward.type === rewardType) {
					totalReward.amount += reward.amount;
				}
			}
			totalRewards.push(totalReward as Reward);
		}
	}
</script>

<section>
	{#each totalRewards as reward}
		<CycleDay {reward} index={-1} currentIndex={-1} personalCalendar={[]} noPadding={true} noBackground={true} />
	{/each}
</section>

<style>
	section {
		column-gap: 1.5em;
		display: flex;
		justify-content: center;
		width: 100%;
		font-size: 0.7em;
		flex-wrap: wrap;
	}
</style>
