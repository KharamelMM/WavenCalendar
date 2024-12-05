import type { EquipmentType } from './EquipmentType';
import type { ItemType } from './ItemType';
import type { RaretyType } from './RaretyType';
import type { RewardType } from './RewardType';

export type Reward = GemsReward | KamasReward | WakfuReward | EquipmentReward | ChestReward | RuneReward;

type GemsReward = {
	type: RewardType.GEMS;
	amount: 100 | 150 | 200 | 250;
};

type KamasReward = {
	type: RewardType.KAMAS;
	amount: number;
};
type WakfuReward = {
	type: RewardType.WAKFU;
	amount: number;
};

type EquipmentReward = {
	type: RewardType.EQUIPMENT;
	rarety: RaretyType;
	kind: ItemType;
	amount: number;
	description?: string;
};

type ChestReward = {
	type: RewardType.CHEST;
	kind: EquipmentType;
	amount: number;
};

type RuneReward = {
	type: RewardType.RUNES;
	kind: EquipmentType;
	amount: number;
};
