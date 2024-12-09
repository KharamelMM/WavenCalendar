import type { Enums } from '$lib/supabase/database.types';
import type { RewardType } from './RewardType';

export type Reward = BaseReward & (GemsReward | KamasReward | WakfuReward | EquipmentReward | ChestReward | RuneReward);

type BaseReward = {
	cycle_index: number;
};

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
	rarety: Enums<'E_Rarety'>;
	item: Enums<'E_Item'>;
	amount: number;
	description?: string;
};

type ChestReward = {
	type: RewardType.CHEST;
	equipment: Enums<'E_Equipment'>;
	amount: number;
};

type RuneReward = {
	type: RewardType.RUNES;
	equipment: Enums<'E_Equipment'>;
	amount: number;
};
