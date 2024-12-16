<script lang="ts">
	import FlyingSection from '$lib/components/FlyingSection.svelte';
	import Chart from './Chart.svelte';
	import { locale } from 'svelte-i18n';
</script>

<FlyingSection>
	{#key $locale}
		<Chart />
	{/key}
</FlyingSection>
