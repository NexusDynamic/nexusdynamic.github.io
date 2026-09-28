// All text and links on the site live here. To add, change or remove a
// project, edit this file; the page renders whatever is in it.

export interface Link {
	label: string;
	href: string;
}

export interface Project {
	name: string;
	description: string;
	/** Short labels shown under the description, e.g. platforms. */
	tags?: string[];
	/** The first link is shown as the primary button. */
	links: Link[];
	/** Path under /static, e.g. '/img/foo.webp'. */
	image?: { src: string; alt: string };
	icon?: string;
}

export interface Section {
	id: string;
	title: string;
	intro?: string;
	projects: Project[];
}

const gh = 'https://github.com/NexusDynamic';
const monorepo = `${gh}/liblsl.dart`;
const pkg = (name: string) => `${monorepo}/tree/main/packages/${name}`;
const pub = (name: string) => `https://pub.dev/packages/${name}`;

export const site = {
	title: 'NexusDynamic',
	url: 'https://nexusdynamic.org',
	tagline: 'Multimodal group social dynamics research, for everyone',
	description:
		'Open, cross-platform tools for group research: Lab Streaming Layer for Dart and Flutter, the LSL Viewer, multi-device timing tests, and the Rise Together game.',
	intro:
		'NexusDynamic builds a group-first, cross-platform suite of tools that make it easy to collect behavioural, EEG, motion capture or any other data. Anything with a Lab Streaming Layer integration, or any API that produces data, can be recorded or forwarded on as an LSL stream.',
	github: gh,
	pubPublisher: 'https://pub.dev/publishers/zeyus.com/packages',
	lsl: 'https://labstreaminglayer.org/',
	poster: '/FINAL-Coop_comp_paradigm-A0Poster_reduced.pdf',
	citation: {
		text: 'Ring, Zamm, Mathys & Kappel. liblsl.dart: A Dart native API for Lab Streaming Layer (LSL).',
		href: 'https://doi.org/10.5281/zenodo.20340247'
	}
};

export const nav: Link[] = [
	{ label: 'Viewer', href: '#lsl-viewer' },
	{ label: 'Game', href: '#rise-together' },
	{ label: 'Packages', href: '#packages' },
	{ label: 'Timing', href: '#timing' },
	{ label: 'Research', href: '#research' }
];

export const heroLinks: Link[] = [
	{ label: 'Open LSL Viewer', href: 'https://nexusdynamic.org/liblsl.dart/lsl_viewer/' },
	{ label: 'Play Rise Together', href: 'https://rt-lobby.nexusdynamic.org' },
	{ label: 'GitHub', href: gh }
];

/** Big cards at the top of the page. The id is the anchor used by the nav. */
export const featured: (Project & { id: string; eyebrow: string })[] = [
	{
		id: 'lsl-viewer',
		eyebrow: 'App',
		name: 'LSL Viewer',
		description:
			'An XDF file viewer and live LSL stream viewer. Open LabRecorder recordings of any size (in the browser they are read locally, never uploaded), view live streams with filters, re-referencing, power spectra and signal quality, record to XDF, replay recordings as LSL streams, and share streams across networks with the built-in WebSocket bridge and relay. It also works with OpenBCI Cyton and serial devices, including over WebSerial.',
		tags: ['Web', 'Windows', 'macOS', 'Linux', 'Android'],
		image: {
			src: '/img/lsl-viewer.webp',
			alt: 'LSL Viewer showing 35 channels of EEG from an XDF recording'
		},
		icon: '/img/lsl-viewer-icon.webp',
		links: [
			{ label: 'Open the web app', href: 'https://nexusdynamic.org/liblsl.dart/lsl_viewer/' },
			{ label: 'Downloads', href: `${monorepo}/releases?q=lsl_viewer&expanded=true` },
			{ label: 'Documentation', href: 'https://nexusdynamic.org/liblsl.dart/' },
			{ label: 'Bridge and relay guide', href: 'https://nexusdynamic.org/liblsl.dart/relay.html' },
			{ label: 'Source', href: `${monorepo}/tree/main/apps/lsl_viewer` }
		]
	},
	{
		id: 'rise-together',
		eyebrow: 'Game',
		name: 'Rise Together',
		description:
			'A cooperative and competitive physics game. Keep the ball in the air by lifting the left and right sides of your paddle, climb through the levels and race the other team to the top. Play solo, team up in co-op, or play team against team online with quick match or a private room code. It includes a level editor and untimed play. It is the game version of our research paradigm, without the research logging and multimodal integration.',
		tags: ['Web', 'Android', 'iOS', 'Windows', 'macOS', 'Linux'],
		icon: '/img/rise-together-icon.webp',
		links: [
			{ label: 'Play online', href: 'https://rt-lobby.nexusdynamic.org' },
      { label: 'Play offline in the browser', href: 'https://nexusdynamic.org/RTGame/' },
			{ label: 'Downloads', href: `${gh}/RTGame/releases` },
			{ label: 'Source', href: `${gh}/RTGame` }
		]
	}
];

export const sections: Section[] = [
	{
		id: 'packages',
		title: 'liblsl.dart',
		intro:
			'The core of the project: Lab Streaming Layer and XDF for Dart and Flutter, on Android, iOS, Linux, macOS, Windows and the web.',
		projects: [
			{
				name: 'liblsl',
				description:
					'Dart and Flutter bindings for liblsl, with full parity with the C library. Makes LSL integration into your app a breeze.',
				links: [
					{ label: 'pub.dev', href: pub('liblsl') },
					{ label: 'Source', href: pkg('liblsl') },
					{ label: 'Cite (DOI)', href: site.citation.href }
				]
			},
			{
				name: 'xdf',
				description:
					'Read and write XDF files in pure Dart on every platform, including the web. Uses the same algorithms as pyxdf and is tested against it.',
				links: [
					{ label: 'pub.dev', href: pub('xdf') },
					{ label: 'Source', href: pkg('xdf') }
				]
			},
			{
				name: 'signal_core',
				description:
					'A format-agnostic multichannel signal engine (summary pyramids, filters) that powers the viewer and the xdf package.',
				links: [
					{ label: 'pub.dev', href: pub('signal_core') },
					{ label: 'Source', href: pkg('signal_core') }
				]
			},
			{
				name: 'lsl_tools',
				description:
					'The lsl command line tool: list, record to XDF, share across networks, bridge, relay, replay and generate LSL streams.',
				links: [
					{ label: 'Source', href: pkg('lsl_tools') },
					{ label: 'Downloads', href: `${monorepo}/releases?q=lsl_viewer&expanded=true` }
				]
			},
			{
				name: 'Coordinators',
				description:
					'Coordinate experiments across devices: coordinator election, membership, heartbeats and synchronised data streams over LSL, a WebSocket hub or peer-to-peer WebRTC.',
				links: [
					{ label: 'peer_coordinator', href: pub('peer_coordinator') },
					{ label: 'liblsl_coordinator', href: pub('liblsl_coordinator') },
					{ label: 'webrtc_coordinator', href: pub('webrtc_coordinator') }
				]
			},
			{
				name: 'serial_transport',
				description:
					'Serial devices from Dart on desktop and in the browser (WebSerial). The OpenBCI Cyton driver is built on it.',
				links: [
					{ label: 'pub.dev', href: pub('serial_transport') },
					{ label: 'Source', href: pkg('serial_transport') }
				]
			}
		]
	},
	{
		id: 'timing',
		title: 'Timing and latency',
		intro:
			'Validate latency and synchronisation in your own lab, on the devices you plan to use, before you collect any data.',
		projects: [
			{
				name: 'liblsl_timing',
				description:
					'An app for multi-device latency, synchronisation and interactive timing tests, with devices coordinated automatically over LSL.',
				links: [{ label: 'Source', href: pkg('liblsl_timing') }]
			},
			{
				name: 'liblsl_analysis',
				description: 'Analysis of the results from liblsl_timing tests.',
				links: [{ label: 'Source', href: pkg('liblsl_analysis') }]
			},
			{
				name: 'button_display_latency',
				description:
					'A Flutter app that measures the input-to-display pipeline for different button implementations, with frame-accurate timing and sync pulses for external measurement.',
				links: [{ label: 'Source', href: `${gh}/button_display_latency` }]
			},
			{
				name: 'bela-lsl-timing',
				description:
					'Validate end-to-end device latency with a Bela, photodiodes and force-sensitive resistors.',
				links: [
					{ label: 'Source', href: `${gh}/bela-lsl-timing` },
					{ label: 'Bela', href: 'https://bela.io/' }
				]
			},
			{
				name: 'Bela-liblsl',
				description: 'A pre-compiled liblsl build for the Bela (BeagleBone Black).',
				links: [{ label: 'Source', href: `${gh}/Bela-liblsl` }]
			}
		]
	},
	{
		id: 'flutter',
		title: 'Flutter packages',
		intro: 'General-purpose packages built along the way, useful in any Flutter app.',
		projects: [
			{
				name: 'flutter_multicast_lock',
				description:
					'Acquire multicast locks on Android (and safely do nothing on other platforms), which LSL discovery needs.',
				links: [
					{ label: 'pub.dev', href: pub('flutter_multicast_lock') },
					{ label: 'Source', href: `${gh}/flutter_multicast_lock` }
				]
			},
			{
				name: 'flutter_refresh_rate_control',
				description:
					"Ask Android and iOS devices to use their highest refresh rate (such as ProMotion) and try to disable Android's adaptive refresh rate.",
				links: [
					{ label: 'pub.dev', href: pub('flutter_refresh_rate_control') },
					{ label: 'Source', href: `${gh}/flutter_refresh_rate_control` }
				]
			},
			{
				name: 'easy_shared_preferences',
				description:
					'A wrapper around shared_preferences that makes app settings easier to manage and modular.',
				links: [
					{ label: 'pub.dev', href: pub('easy_shared_preferences') },
					{ label: 'Source', href: `${gh}/easy_shared_preferences` }
				]
			}
		]
	}
];

export const research = {
	id: 'research',
	title: 'Research paradigm',
	subtitle: 'Simultaneous cooperation and competition in groups',
	paragraphs: [
		'RiseTogether is a video-game-style experimental paradigm for studying simultaneous cooperation and competition in groups. It supports different group sizes and is built on the liblsl.dart framework, which coordinates and configures the experiment automatically in different labs, on different devices and with different numbers of participants.',
		'The research code and data will be released once data collection is complete. Until then, see the poster for an overview, or play the game version, Rise Together.'
	],
	links: [
		{ label: 'View the poster (PDF)', href: site.poster },
		{ label: 'Play Rise Together', href: '#rise-together' }
	] satisfies Link[],
	image: { src: '/poster-thumbnail.jpg', alt: 'Conference poster for the framework and paradigm' }
};
