<script lang="ts">
	import { fly } from 'svelte/transition';

	export let leftToRight: boolean = true;
	const X = 1000;
</script>

<section
	in:fly={{ delay: 250, x: X * (leftToRight ? -1 : 1) }}
	out:fly={{ duration: 250, x: X * (leftToRight ? 1 : -1) }}
>
	<slot />
</section>

<style>
	:root {
		overflow-x: hidden;
	}
</style>
