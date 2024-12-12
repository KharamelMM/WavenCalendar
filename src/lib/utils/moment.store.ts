import moment from 'moment/min/moment-with-locales';
import { locale } from 'svelte-i18n';
import { writable } from 'svelte/store';

function fn(date?: Date) {
	const res = moment(date);
	return res;
}

moment.updateLocale('en', {
	week: {
		dow: 1 // Monday is the first day of the week.
	}
});

export const momentStore = writable(fn);

locale.subscribe((value) => {
	if (value) {
		moment.locale(value);
		momentStore.set(fn);
	}
});
