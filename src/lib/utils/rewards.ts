import type { Calendar } from '$lib/types/Calendar';
import type { Reward } from '$lib/types/Reward';
import { RewardType } from '$lib/types/RewardType';
import { CYCLE_LENGTH } from './const';

export function getRewardsClass(reward?: Reward, filters?: { [key in string]: boolean }) {
	if (reward) {
		if (reward.type === RewardType.EQUIPMENT || reward.type === RewardType.COMPANION) {
			if (!filters || filters[reward.rarety]) {
				return reward.rarety.toLowerCase();
			}
		} else if (!filters || filters[reward.type]) {
			return reward.type.toLowerCase();
		}
	}
}

function findInCalendar(calendar: Calendar, type: RewardType, amount: number) {
	return calendar.findIndex((reward) => reward?.type === type && reward?.amount === amount);
}

const UNIQUE_REWARDS: [RewardType, number][] = [
	[RewardType.KAMAS, 1],
	[RewardType.WAKFU, 1],
	[RewardType.KAMAS, 1999],
	[RewardType.GEMS, 150],
	[RewardType.GEMS, 200]
];

export function getOffset(personalCalendar: Calendar, cycle: Calendar) {
	// Find Type KAMAS and AMOUNT 0
	for (const uniqueReward of UNIQUE_REWARDS) {
		const personalIndex = findInCalendar(personalCalendar, ...uniqueReward);
		if (personalIndex > 0) {
			const uniqueKamasIndex = findInCalendar(cycle, ...uniqueReward);
			return (personalIndex - uniqueKamasIndex + CYCLE_LENGTH) % CYCLE_LENGTH;
		}
	}

	return -1;
}
