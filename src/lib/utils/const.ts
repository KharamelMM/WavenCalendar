import { t } from '$lib/i18n';

export const MONTHS = [
	t.JANUARY,
	t.FEBRUARY,
	t.MARCH,
	t.APRIL,
	t.MAY,
	t.JUNE,
	t.JULY,
	t.AUGUST,
	t.SEPTEMBER,
	t.OCTOBER,
	t.NOVEMBER,
	t.DECEMBER
];
export const DAYS = [
	t.SHORT_SUNDAY,
	t.SHORT_MONDAY,
	t.SHORT_TUESDAY,
	t.SHORT_WEDNESDAY,
	t.SHORT_THURSDAY,
	t.SHORT_FRIDAY,
	t.SHORT_SATURDAY
];

export const CYCLE_LENGTH = 365;
export const CYCLE_START = new Date(2024, 0, 1);

export const DEFAULT_PROFILE_NAME = 'default';
