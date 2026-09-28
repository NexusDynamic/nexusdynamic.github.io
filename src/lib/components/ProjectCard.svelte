<script lang="ts">
	import type { Project } from '$lib/content';
	import Tags from './Tags.svelte';

	let { project }: { project: Project } = $props();
</script>

<article
	class="flex flex-col gap-3 rounded-xl border border-white/10 bg-zinc-900/60 p-5 transition-colors hover:border-brand-400/40"
>
	<h3 class="font-mono text-base font-semibold text-white">{project.name}</h3>
	<p class="flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
	{#if project.tags}<Tags tags={project.tags} />{/if}
	<ul class="flex flex-wrap gap-x-4 gap-y-1 text-sm">
		{#each project.links as link (link.href)}
			<li>
				<a
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					class="font-medium text-brand-300 underline-offset-4 hover:text-brand-400 hover:underline"
					>{link.label}</a
				>
			</li>
		{/each}
	</ul>
</article>
