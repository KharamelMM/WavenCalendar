import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';
export { t } from './keys';

const defaultLocale = 'fr';

register('en', () => import('./locales/en'));
register('fr', () => import('./locales/fr'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? new URLSearchParams(window.location.search).get('lang') : defaultLocale
});
