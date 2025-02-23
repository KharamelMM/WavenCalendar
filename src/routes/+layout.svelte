<script lang="ts">
	import { receive, send } from '$lib/animations/translate';
	import { t } from '$lib/i18n';
	import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';
	import { _, locale, isLoading, getLocaleFromNavigator } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { session } from '$lib/utils/session.store';
	import { exportAllFromSupabase } from '$lib/supabase/calendar';
	import { localStorageStore } from '$lib/utils/localstorage.store';
	import { get } from 'svelte/store';
	import { logOut } from '$lib/supabase/auth';

	const BUBBLE_LANG_ID = 'bubble_lang';

	let lightMode = false;

	let lang = 'fr';

	function swapDarkMode() {
		lightMode = !lightMode;
		if (lightMode) {
			document.documentElement.classList.add('light');
		} else {
			document.documentElement.classList.remove('light');
		}
	}

	function setLang(newLang: string) {
		lang = newLang;
		locale.set(lang);
	}

	onMount(() => {
		supabase.auth.getSession().then(({ data }) => {
			session.set(data.session);
			if (data.session) {
				let localProfiles = get(localStorageStore).profiles;
				if (
					Object.keys(localProfiles).length === 0 ||
					(Object.keys(localProfiles).length === 1 && Object.values(localProfiles)[0].length === 0)
				) {
					exportAllFromSupabase().then((profiles) => {
						console.log('Exported all profiles from Supabase');
						localStorageStore.update((localStorageValue) => {
							localStorageValue.profiles = profiles;
							return localStorageValue;
						});
						logOut();
					});
				}
			}
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			session.set(_session);
		});

		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			swapDarkMode();
		}

		if (getLocaleFromNavigator()?.startsWith('en')) {
			lang = 'en';
		}
		setLang(lang);
	});
</script>

{#if !$isLoading}
	<header>
		<div class="brand">
			<h1>{$_(t.HEADLINE)}</h1>
		</div>
		<div class="navigation">
			<button
				disabled={$page.url.pathname === '/WavenCalendar/'}
				class="with-icon"
				onclick={() => goto('/WavenCalendar')}
			>
				<div class="material-icon">edit_calendar</div>
				<div class="text">{$_(t.NAVIGATION_HOME)}</div>
			</button>
			<button
				disabled={$page.url.pathname === '/WavenCalendar/calendar'}
				class="with-icon"
				onclick={() => goto('/WavenCalendar/calendar')}
			>
				<div class="material-icon">calendar_month</div>
				<div class="text">{$_(t.NAVIGATION_CALENDAR)}</div>
			</button>
		</div>
		<div class="controls">
			<div class="langs">
				<button onclick={() => setLang('fr')} disabled={lang === 'fr'}>
					<div class="lang">FR</div>
					{#if lang === 'fr'}
						<bubble in:receive={{ key: BUBBLE_LANG_ID }} out:send={{ key: BUBBLE_LANG_ID }}></bubble>
					{/if}
				</button>
				<button onclick={() => setLang('en')} disabled={lang === 'en'}>
					<div class="lang">EN</div>
					{#if lang === 'en'}
						<bubble in:receive={{ key: BUBBLE_LANG_ID }} out:send={{ key: BUBBLE_LANG_ID }}></bubble>
					{/if}
				</button>
			</div>
			<button class="material-icon" onclick={swapDarkMode}>
				{#if lightMode}
					dark_mode
				{:else}
					light_mode
				{/if}
			</button>
			<button onclick={() => (window.location.href = 'https://github.com/KharamelMM/WavenCalendar')}>Github</button>
		</div>
	</header>

	<slot />
{/if}

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 0.5em 4em;
		position: sticky;
		top: 0;
		z-index: 10;
		background-color: var(--bg);

		@media (max-width: 600px) {
			padding: 0.5em 1em;
		}
	}

	.brand {
		display: flex;
		flex-direction: column;
	}
	.brand > * {
		margin: 0;
	}

	.brand > h1 {
		font-size: 1.5em;
	}

	.controls,
	.langs {
		display: flex;
		position: relative;
	}

	.controls {
		gap: 1em;
		align-items: center;
	}

	.controls button {
		box-shadow: none;
	}
	.langs button:disabled {
		color: var(--bg);
	}

	.langs {
		background-color: var(--bg-secondary);
		border-radius: 2em;
		gap: 0.5em;
		height: 2em;
	}

	.langs button {
		position: relative;
	}

	.lang {
		font-weight: bolder;
		position: relative;
		z-index: 1;
	}

	bubble {
		background-color: var(--headline);
		border-radius: 50%;
		width: 2em;
		height: 2em;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 0;
	}

	button.with-icon {
		display: flex;
		align-items: center;
		border: solid 0.2em var(--headline);
		border-radius: 2em;
		padding: 0 1em;
		gap: 0.5em;
	}

	button.with-icon:hover {
		background-color: var(--headline);
		color: var(--bg);
	}

	.navigation {
		display: flex;
		gap: 0.5em;
		justify-content: center;
	}

	.navigation button:disabled {
		background-color: var(--headline);
		color: var(--bg);
	}

	@media (max-width: 950px) {
		button.with-icon .text {
			display: none;
		}
	}

	@media (max-width: 700px) {
		.brand {
			display: none;
		}
	}
</style>
