import moment from 'moment';
import { DAYS } from './const';

export function daysInMonth(month: number, year: number) {
	return new Date(year, month + 1, 0).getDate();
}

/**
 * Get the index of first day of the week of a month
 * @param month
 * @param year
 * @returns
 */
export function firstDayOfMonth(month: number, year: number) {
	return new Date(year, month, 1).getDay();
}

/**
 * Add a week offset to a day index. By example, if weekOffset is 1, Monday will be considered as the first day of the week at index 0 and Sunday at index 6.
 * @param dayIndex
 * @param weekOffset
 * @returns
 */
function offsetDayOfWeek(dayIndex: number, weekOffset: number) {
	return (dayIndex - weekOffset + DAYS.length) % DAYS.length;
}

/**
 * Get the number of distinct weeks in a month
 * @param month
 * @param year
 * @param weekOffset
 * @returns
 */
export function nbDistinctWeeksOfMonth(month: number, year: number, weekOffset: number = 0) {
	const firstDay = offsetDayOfWeek(firstDayOfMonth(month, year), weekOffset);
	const days = daysInMonth(month, year);
	return Math.ceil((firstDay + days) / 7);
}

export function getDayOfMonth(month: number, year: number, day: number, week: number, weekOffset: number = 0) {
	return day + week * DAYS.length - offsetDayOfWeek(firstDayOfMonth(month, year), weekOffset) + 1;
}

export function offsetBetween(date1: Date, date2: Date) {
	return moment(date1).diff(moment(date2), 'days');
}

export function offsetInCycle(date: Date, startDate: Date) {
	return ((offsetBetween(date, startDate) % 365) + 365) % 365;
}
