<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { t } from '$lib/i18n';
	export let offsetsByScore: { [key: number]: number };
	export let currentOffset: number;
	let offsets: number[] = [];
	let scoreSum = 0;

	$: {
		offsets = Object.keys(offsetsByScore).sort(
			(a, b) => offsetsByScore[+b] - offsetsByScore[+a]
		) as unknown as number[];
		scoreSum = Object.values(offsetsByScore).reduce((acc, cur) => acc + cur, 0);
		console.log(offsetsByScore);
		currentOffset = offsets[0];
	}
</script>

{#if Object.keys(offsetsByScore).length > 0}
	<section>
		<table>
			<thead>
				<tr>
					<th>{$_(t.CALENDAR_OFFSET_KEY)}</th>
					<th>{$_(t.CALENDAR_OFFSET_PROBABILITY_KEY)}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each offsets as offset}
					<tr>
						<td class:bold={offset === currentOffset}>{offset}</td>
						<td class:bold={offset === currentOffset}>{Math.round((offsetsByScore[offset] / scoreSum) * 1000) / 10}%</td
						>
						{#if offset === currentOffset}
							<td><button class="material-icon" disabled>task_alt</button></td>
						{:else}
							<td>
								<button class="material-icon" onclick={() => (currentOffset = offset)}> radio_button_unchecked </button>
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
	<div class="info">
		{$_(t.CALENDAR_OFFSET_INFO)}
	</div>
{/if}

<style>
	.info {
		max-width: 40em;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	thead {
		color: var(--headline);
	}

	th,
	td {
		padding: 0.1em 1em;
		text-align: center;
	}

	tr:nth-child(even) {
		background-color: color-mix(in srgb, var(--text) 10%, transparent 90%);
	}

	.bold {
		color: var(--headline);
	}

	button {
		border-radius: 50%;
		padding: 0;
	}
</style>
