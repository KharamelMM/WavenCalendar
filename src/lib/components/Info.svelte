<script lang="ts">
	import { t } from '$lib/i18n';
	import { _ } from 'svelte-i18n';
</script>

<section>
	<div>{$_(t.INFO_INTRODUCTION)}</div>
	<div><b>{$_(t.INFO_OBJECTIVE_TITLE)}</b> {$_(t.INFO_OBJECTIVE_TEXT)}</div>
	<div>
		<b>{$_(t.INFO_AUTHENTICATION_TITLE)}</b>
		{$_(t.INFO_AUTHENTICATION_TEXT)}
		<ol>
			<li>{$_(t.INFO_AUTHENTICATION_STEP_1)}</li>
			<li>{$_(t.INFO_AUTHENTICATION_STEP_2)} <b>WavenCalendar@gmail.com</b></li>
			<li>{$_(t.INFO_AUTHENTICATION_STEP_3)}</li>
		</ol>
	</div>

	<div><b>{$_(t.INFO_CONFIDENTIALITY_TITLE)}</b> {$_(t.INFO_CONFIDENTIALITY_TEXT)}</div>
	<div>
		<b>{$_(t.INFO_OPENSOURCE_TITLE)}</b>
		{$_(t.INFO_OPENSOURCE_TEXT_1)}
		<a href="https://github.com/KharamelMM/WavenCalendar">Github</a>.
		{$_(t.INFO_OPENSOURCE_TEXT_2)}
	</div>
	<div>{$_(t.INFO_END)}</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		padding: 1em;
	}

	ol {
		margin: 0;
	}

	ol li::marker {
		color: var(--headline);
	}
</style>
