import type { Enums } from '$lib/database/database.types';
import type { RewardType } from './RewardType';

export type Reward = BaseReward &
	(GemsReward | KamasReward | WakfuReward | EquipmentReward | CompanionReward | ChestReward | RuneReward) & {
		validated?: boolean;
	};

type BaseReward = {
	cycle_index: number;
};

export type GemsReward = {
	type: RewardType.GEMS;
	amount: 100 | 150 | 200 | 250;
};

export type KamasReward = {
	type: RewardType.KAMAS;
	amount: number;
};
export type WakfuReward = {
	type: RewardType.WAKFU;
	amount: number;
};

export type EquipmentReward = {
	type: RewardType.EQUIPMENT;
	rarety: Enums<'E_Rarety'>;
	amount: number;
};

export type CompanionReward = {
	type: RewardType.COMPANION;
	rarety: Enums<'E_Rarety'>;
	amount: number;
};

export type ChestReward = {
	type: RewardType.CHEST;
	equipment: Enums<'E_Equipment'>;
	amount: number;
};

export type RuneReward = {
	type: RewardType.RUNES;
	equipment: Enums<'E_Equipment'>;
	amount: number;
};
