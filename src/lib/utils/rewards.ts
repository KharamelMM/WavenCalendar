import type { Reward } from '$lib/types/Reward';
import { RewardType } from '$lib/types/RewardType';

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
