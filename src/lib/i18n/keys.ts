import type { EquipmentType } from '$lib/types/EquipmentType';
import type { ItemType } from '$lib/types/ItemType';
import type { RaretyType } from '$lib/types/RaretyType';
import type { RewardType } from '$lib/types/RewardType';

enum Keys {
	HEADLINE,

	JANUARY,
	FEBRUARY,
	MARCH,
	APRIL,
	MAY,
	JUNE,
	JULY,
	AUGUST,
	SEPTEMBER,
	OCTOBER,
	NOVEMBER,
	DECEMBER,

	SHORT_MONDAY,
	SHORT_TUESDAY,
	SHORT_WEDNESDAY,
	SHORT_THURSDAY,
	SHORT_FRIDAY,
	SHORT_SATURDAY,
	SHORT_SUNDAY,

	CANCEL,
	SAVE,

	EQUIPMENT_MORE_PLACEHOLDER,

	REWARD_LABEL_TYPE,
	REWARD_LABEL_RARETY,
	REWARD_LABEL_EQUIPMENT_TYPE,
	REWARD_LABEL_ITEM_TYPE,
	REWARD_LABEL_AMOUNT,
	REWARD_LABEL_EQUIPMENT_MORE
}

type LocaleKey = keyof (typeof Keys & typeof RewardType & typeof RaretyType & typeof ItemType & typeof EquipmentType);

export type LocaleType = { [key in LocaleKey]: unknown };
// Object which maps every LocaleKey to itself
type LocaleKeyType = { [key in LocaleKey]: key };
export const t = Object.values(Keys)
	.filter((value) => typeof value === 'string')
	.reduce((a, v) => ({ ...a, [v]: v }), {}) as LocaleKeyType;
