// import { RewardType } from './RewardType';

// const BASE_VALUE = 500;

// type BUTTON_COLOR =
// 	| 'red'
// 	| 'yellow'
// 	| 'green'
// 	| 'purple'
// 	| 'blue'
// 	| 'light'
// 	| 'dark'
// 	| 'primary'
// 	| 'none'
// 	| 'alternative';

// function generateColor<TYPE extends string | undefined, COLOR extends string>(
// 	type: TYPE,
// 	color: COLOR,
// 	offset = 100
// ): TYPE extends string ? `${TYPE}-${COLOR}-${typeof BASE_VALUE}` : COLOR {
// 	if (type === undefined) {
// 		return color as TYPE extends string ? `${TYPE}-${COLOR}-${typeof BASE_VALUE}` : COLOR;
// 	}
// 	return `${type}-${color}-${BASE_VALUE + offset} dark:${type}-${color}-${BASE_VALUE - offset}` as TYPE extends string
// 		? `${TYPE}-${COLOR}-${typeof BASE_VALUE}`
// 		: COLOR;
// }

// export const RewardColor = {
// 	[RewardType.Gems]: (v = undefined, o = 100) => generateColor(v, 'purple', o),
// 	[RewardType.Kamas]: (v = undefined, o = 100) => generateColor(v, 'orange', o),
// 	[RewardType.Common]: (v = undefined, o = 100) => generateColor(v, 'gray', Math.abs(o)),
// 	[RewardType.Rare]: (v = undefined, o = 100) => generateColor(v, 'blue', o),
// 	[RewardType.Krosmic]: (v = undefined, o = 100) => generateColor(v, 'purple', o),
// 	[RewardType.Infinite]: (v = undefined, o = 100) => generateColor(v, 'yellow', o)
// } as const satisfies Record<RewardType, (variant?: string, offset?: number) => string>;

// export const RewardButtonColor = {
// 	[RewardType.Gems]: 'purple',
// 	[RewardType.Kamas]: 'alternative',
// 	[RewardType.Common]: 'none',
// 	[RewardType.Rare]: 'none',
// 	[RewardType.Krosmic]: 'alternative',
// 	[RewardType.Infinite]: 'yellow'
// } as const satisfies Record<RewardType, BUTTON_COLOR>;
