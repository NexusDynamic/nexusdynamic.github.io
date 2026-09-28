<script lang="ts">
	let { tags }: { tags: string[] } = $props();
</script>

<ul class="flex flex-wrap gap-1.5" aria-label="Platforms">
	{#each tags as tag (tag)}
		<li class="rounded-full bg-brand-900/60 px-2.5 py-0.5 text-xs text-brand-300">{tag}</li>
	{/each}
</ul>
