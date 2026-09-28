<script lang="ts">
	import type { Link } from '$lib/content';

	let { link, primary = false }: { link: Link; primary?: boolean } = $props();

	const external = $derived(/^https?:/.test(link.href));
</script>

<a
	href={link.href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class={[
		'inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
		primary
			? 'bg-brand-500 text-white hover:bg-brand-400'
			: 'border border-white/10 bg-white/5 text-zinc-200 hover:border-brand-400/50 hover:bg-white/10'
	]}
>
	{link.label}{#if external}<span aria-hidden="true" class="text-xs opacity-60">↗</span>{/if}
</a>
