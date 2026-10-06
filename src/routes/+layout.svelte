<script lang="ts">
	import '../app.css';
	import { site } from '#lib/content.ts';
	import Footer from '#lib/components/Footer.svelte';
	import Nav from '#lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>{site.title}: {site.tagline}</title>
	<meta name="description" content={site.description} />
	<link rel="canonical" href={site.url + '/'} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={site.url + '/'} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={site.url + '/android-chrome-512x512.png'} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div
	class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-brand-900)_0%,transparent_60%)] opacity-70"
	aria-hidden="true"
></div>
<Nav />
<main class="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
	{@render children()}
</main>
<Footer />
