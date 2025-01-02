<script lang="ts">
	import { t } from '$lib/i18n';
	import { getStats } from '$lib/supabase/stats';
	import { momentStore } from '$lib/utils/moment.store';
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { get } from 'svelte/store';

	const REWARD_COUNT_OBJECTIVE = 700;

	let ctx;
	let chartCanvas: HTMLCanvasElement;

	onMount(async () => {
		ctx = chartCanvas.getContext('2d');
		if (ctx) {
			let stats = await getStats();
			console.log(stats);
			let values = stats.map((stat) => stat.count ?? 0);
			//  accumulate the values
			values = values.reduce((acc: number[], value) => {
				acc.push(((acc.length && acc[acc.length - 1]) || 0) + value);
				return acc;
			}, []);
			const labels = stats.map((stat) => get(momentStore)(new Date(stat.day ?? '')).format('DD MMM YYYY'));
			Chart.defaults.borderColor = '#222';
			Chart.defaults.color = '#aaa';
			new Chart(ctx, {
				type: 'line',
				data: {
					labels: labels,

					datasets: [
						{
							label: get(_)(t.STATS_LABEL_COUNT_REWARDS),
							backgroundColor: 'white',
							borderColor: 'white',
							data: values
						},
						{
							label: get(_)(t.STATS_LABEL_OBJECTIVE),
							backgroundColor: '#CC7777',
							borderColor: '#CC7777',
							data: values.map((_) => REWARD_COUNT_OBJECTIVE)
						}
					]
				},
				options: {
					maintainAspectRatio: false
				}
			});
		}
	});
</script>

<canvas bind:this={chartCanvas}></canvas>

<style>
	:global(.light) canvas {
		filter: invert(1);
	}

	canvas {
		width: 100%;
		height: 100%;
	}
</style>
