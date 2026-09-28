<script lang="ts">
	import { site } from '$lib/content';

	const links = [
		{ label: 'GitHub', href: site.github },
		{ label: 'pub.dev packages', href: site.pubPublisher },
		{ label: 'Lab Streaming Layer', href: site.lsl }
	];
</script>

<footer class="border-t border-white/10">
	<div class="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-zinc-400 sm:px-6">
		<ul class="flex flex-wrap gap-x-6 gap-y-2">
			{#each links as link (link.href)}
				<li><a href={link.href} class="hover:text-white">{link.label}</a></li>
			{/each}
		</ul>
		<p>
			Using liblsl.dart in your research? Please cite:
			<a href={site.citation.href} class="text-brand-300 hover:text-brand-400"
				>{site.citation.text}</a
			>
		</p>
	</div>
</footer>
