import { getLocaleFromNavigator, init, register } from 'svelte-i18n';
export { t } from './keys';

const defaultLocale = 'fr';

register('en', () => import('./locales/en'));
register('fr', () => import('./locales/fr'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: getLocaleFromNavigator()
});
