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

function rewardsEqual(reward1: Reward, reward2: Reward) {
	if (reward1?.type === reward2?.type && reward1?.amount === reward2?.amount) {
		switch (reward1.type) {
			case RewardType.EQUIPMENT:
			case RewardType.COMPANION:
				if (reward1.rarety === (reward2 as typeof reward1).rarety) {
					return true;
				}
				break;

			case RewardType.RUNES:
			case RewardType.CHEST:
				if (reward1.equipment === (reward2 as typeof reward1).equipment) {
					return true;
				}
				break;

			default:
				return true;
		}
	}
	return false;
}

function findAllIndexesInCalendar(calendar: Calendar, reward: Reward) {
	return calendar.reduce((indexes, r) => {
		if (r) {
			if (rewardsEqual(r, reward)) {
				indexes.push(r.cycle_index);
			}
		}
		return indexes;
	}, [] as number[]);
}

function findInCalendar(calendar: Calendar, type: RewardType, amount: number) {
	return calendar.findIndex((reward) => reward?.type === type && reward?.amount === amount);
}

const UNIQUE_REWARDS: [RewardType, number][] = [
	[RewardType.KAMAS, 1],
	[RewardType.KAMAS, 1999],
	[RewardType.WAKFU, 1],
	[RewardType.WAKFU, 999],
	[RewardType.GEMS, 150],
	[RewardType.GEMS, 200]
];

export function getOffset(personalCalendar: Calendar, cycle: Calendar) {
	// Find Type KAMAS and AMOUNT 0
	for (const uniqueReward of UNIQUE_REWARDS) {
		const personalIndex = findInCalendar(personalCalendar, ...uniqueReward);
		if (personalIndex >= 0) {
			const uniqueKamasIndex = findInCalendar(cycle, ...uniqueReward);
			return { [(personalIndex - uniqueKamasIndex + CYCLE_LENGTH) % CYCLE_LENGTH]: 1 };
		}
	}

	// Filter undefined rewards
	const possibleOffsets = personalCalendar.reduce((offsets, reward) => {
		if (reward) {
			const indexes = findAllIndexesInCalendar(cycle, reward).map(
				(index) => (reward.cycle_index - index + CYCLE_LENGTH) % CYCLE_LENGTH
			);
			offsets = [...indexes, ...offsets];
		}
		return offsets;
	}, [] as number[]);
	const offsetByScore: { [key: number]: number } = {};
	for (const offset of possibleOffsets) {
		let score = 0;
		for (let i = 0; i < CYCLE_LENGTH; i++) {
			const personalReward = personalCalendar[(i + offset) % CYCLE_LENGTH];
			const cycleReward = cycle[i];
			if (personalReward && cycleReward) {
				if (!rewardsEqual(personalReward, cycleReward)) {
					score = 0;
					break;
				} else {
					score++;
				}
			}
		}
		if (score > 0) {
			offsetByScore[offset] = score;
		}
	}
	return offsetByScore;
}
