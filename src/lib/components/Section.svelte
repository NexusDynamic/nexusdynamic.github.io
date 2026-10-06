<script lang="ts">
	import type { Section } from '#lib/content.ts';
	import ProjectCard from './ProjectCard.svelte';

	let { section }: { section: Section } = $props();
</script>

<section id={section.id} class="flex flex-col gap-6">
	<header class="max-w-3xl">
		<h2 class="text-2xl font-bold text-white sm:text-3xl">{section.title}</h2>
		{#if section.intro}<p class="mt-2 text-zinc-400">{section.intro}</p>{/if}
	</header>
	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each section.projects as project (project.name)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
