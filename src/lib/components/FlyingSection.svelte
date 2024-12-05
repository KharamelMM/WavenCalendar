<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<section in:fly={{ delay: 250, x: -1000 }} out:fly={{ duration: 250, x: 1000 }}>
	<slot />
</section>

<style>
	:root {
		overflow-x: hidden;
	}
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
