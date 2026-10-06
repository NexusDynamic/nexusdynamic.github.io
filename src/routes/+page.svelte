<script lang="ts">
	import { featured, heroLinks, research, sections, site } from '#lib/content';
	import FeatureCard from '#lib/components/FeatureCard.svelte';
	import LinkButton from '#lib/components/LinkButton.svelte';
	import Section from '#lib/components/Section.svelte';
</script>

<div class="flex flex-col gap-20 sm:gap-24">
	<section class="flex flex-col items-center gap-6 pt-10 text-center sm:pt-16">
		<img
			src="/nexusdynamic.svg"
			alt="NexusDynamic logo: a central pulsing node connected to surrounding nodes of different shapes"
			class="size-44 sm:size-56"
			width="224"
			height="224"
		/>
		<h1 class="max-w-3xl text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl">
			{site.tagline}
		</h1>
		<p class="max-w-2xl text-lg leading-relaxed text-pretty text-zinc-300">{site.intro}</p>
		<div class="flex flex-wrap justify-center gap-3">
			{#each heroLinks as link, i (link.href)}
				<LinkButton {link} primary={i === 0} />
			{/each}
		</div>
	</section>

	<div class="flex flex-col gap-8">
		{#each featured as project (project.id)}
			<FeatureCard {project} />
		{/each}
	</div>

	{#each sections.slice(0, 2) as section (section.id)}
		<Section {section} />
	{/each}

	<section id={research.id} class="grid gap-8 md:grid-cols-[1fr_16rem] md:items-start">
		<div class="flex flex-col gap-4">
			<h2 class="text-2xl font-bold text-white sm:text-3xl">{research.title}</h2>
			<p class="text-lg text-brand-300">{research.subtitle}</p>
			{#each research.paragraphs as paragraph, i (i)}
				<p class="max-w-3xl leading-relaxed text-zinc-300">{paragraph}</p>
			{/each}
			<div class="flex flex-wrap gap-2">
				{#each research.links as link, i (link.href)}
					<LinkButton {link} primary={i === 0} />
				{/each}
			</div>
		</div>
		<a
			href={site.poster}
			target="_blank"
			class="block rounded-xl border border-white/10 bg-zinc-900/60 p-3 transition-transform hover:scale-[1.02]"
		>
			<img
				src={research.image.src}
				alt={research.image.alt}
				loading="lazy"
				class="aspect-208/293 w-full rounded-md object-cover"
			/>
		</a>
	</section>

	{#each sections.slice(2) as section (section.id)}
		<Section {section} />
	{/each}
</div>
