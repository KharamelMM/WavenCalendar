import type { Reward } from './Reward';

export type Calendar = {
	startDate: Date;
	rewards: (Reward | undefined)[];
};
