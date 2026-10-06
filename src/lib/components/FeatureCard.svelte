<script lang="ts">
	import type { featured } from '#lib/content';
	import LinkButton from './LinkButton.svelte';
	import Tags from './Tags.svelte';

	let { project }: { project: (typeof featured)[number] } = $props();
</script>

<article
	id={project.id}
	class="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-xl shadow-black/30"
>
	<div
		class={[
			'grid grid-cols-1 gap-8 p-6 sm:p-8',
			project.image && 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center'
		]}
	>
		<div class="flex min-w-0 flex-col gap-5">
			<div class="flex items-center gap-4">
				{#if project.icon}
					<img src={project.icon} alt="" class="size-14 rounded-xl" width="56" height="56" />
				{/if}
				<div>
					<p class="text-xs font-semibold tracking-widest text-brand-400 uppercase">
						{project.eyebrow}
					</p>
					<h2 class="text-2xl font-bold text-white sm:text-3xl">{project.name}</h2>
				</div>
			</div>
			<p class="leading-relaxed text-zinc-300">{project.description}</p>
			{#if project.tags}<Tags tags={project.tags} />{/if}
			<div class="flex flex-wrap gap-2">
				{#each project.links as link, i (link.href)}
					<LinkButton {link} primary={i === 0} />
				{/each}
			</div>
		</div>
		{#if project.image}
			<a href={project.image.src} target="_blank" class="block min-w-0">
				<img
					src={project.image.src}
					alt={project.image.alt}
					loading="lazy"
					width="1400"
					height="1103"
					class="h-auto w-full rounded-lg border border-white/10"
				/>
			</a>
		{/if}
	</div>
</article>
