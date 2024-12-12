<script lang="ts">
	import { receive, send } from '$lib/animations/translate';
	import AuthenticationModal from '$lib/components/AuthenticationModal.svelte';
	import { t } from '$lib/i18n';
	import { supabase } from '$lib/supabase/client';
	import type { AuthSession } from '@supabase/supabase-js';
	import { onMount } from 'svelte';
	import { _, locale, isLoading, getLocaleFromNavigator } from 'svelte-i18n';

	const BUBBLE_LANG_ID = 'bubble_lang';
	let session: AuthSession | null;

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
			session = data.session;
		});

		supabase.auth.onAuthStateChange((_event, _session) => {
			session = _session;
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
	{#if !session}
		<AuthenticationModal />
	{/if}

	<header>
		<div class="brand">
			<h1>{$_(t.HEADLINE)}</h1>
		</div>
		<div class="controls">
			<div class="langs">
				<button on:click={() => setLang('fr')} disabled={lang === 'fr'}>
					<div class="lang">FR</div>
					{#if lang === 'fr'}
						<bubble in:receive={{ key: BUBBLE_LANG_ID }} out:send={{ key: BUBBLE_LANG_ID }}></bubble>
					{/if}
				</button>
				<button on:click={() => setLang('en')} disabled={lang === 'en'}>
					<div class="lang">EN</div>
					{#if lang === 'en'}
						<bubble in:receive={{ key: BUBBLE_LANG_ID }} out:send={{ key: BUBBLE_LANG_ID }}></bubble>
					{/if}
				</button>
			</div>
			<button class="material-icon" on:click={swapDarkMode}>
				{#if lightMode}
					dark_mode
				{:else}
					light_mode
				{/if}
			</button>
			<button on:click={() => (window.location.href = 'https://github.com/KharamelMM/WavenCalendar')}>Github</button>
		</div>
	</header>
	<section>
		<slot />
	</section>
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
</style>
