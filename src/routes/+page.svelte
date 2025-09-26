<script lang="ts">
	// No additional logic needed for static content
</script>

<svelte:head>
	<title>NexusDynamic - Multimodal Group Social Dynamics Research</title>
	<meta
		name="description"
		content="Multimodal group social dynamics research tools - creating a group-first, cross-platform suite for behavioral, EEG, MoCap, and other data collection."
	/>
</svelte:head>

<main class="min-h-screen bg-white">
	<div class="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<section class="text-center">
			<div class="mx-auto mb-8 max-w-2xl">
				<img
					src="/nexusdynamic.svg"
					alt="NexusDynamic logo showing a central slowly pulsing circular node with spokes connecting to surrounding nodes that have different shapes (circles, squares, triangles, hexagon, etc)"
					class="mx-auto h-64 w-64 sm:h-80 sm:w-80"
					title="NexusDynamic"
				/>
			</div>

			<div class="mb-12">
				<h1 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
					<strong>Multimodal group social dynamics research</strong>
					<span class="text-2xl">🌍 🌟</span>
				</h1>
				<p class="mb-8 text-xl text-gray-600 italic">— for everyone</p>

				<div class="mx-auto max-w-4xl text-lg leading-relaxed text-gray-700">
					<p>
						This project and collection of packages has the goal of creating a group-first,
						cross-platform suite of tools that make it easy to start collecting behavioural, EEG,
						MoCap or any other data source that either already has an integration with
						<a
							href="https://labstreaminglayer.org/"
							class="text-blue-600 underline hover:text-blue-800">Lab Streaming Layer</a
						>, or, any kind of API for consuming data, which can then be collected or forwarded on
						as an LSL stream.
					</p>
				</div>
			</div>
		</section>

		<!-- Poster Section -->
		<section class="mb-16 flex flex-col items-center lg:flex-row lg:items-start lg:gap-8">
			<div class="mb-8 lg:mb-0 lg:flex-1">
				<div class="rounded-lg border bg-blue-50 p-6">
					<div class="mb-4 flex items-center">
						<div class="mr-3 text-2xl">💡</div>
						<h3 class="text-lg font-semibold text-blue-900">Tip</h3>
					</div>
					<p class="text-blue-800">
						For a quick overview, see the
						<a
							href="/FINAL-Coop_comp_paradigm-A0Poster_reduced.pdf"
							class="font-semibold text-blue-600 underline hover:text-blue-800"
							target="_blank"
							rel="noopener noreferrer"
						>
							poster →
						</a>
					</p>
				</div>

				<div class="mt-6 rounded-lg border bg-gray-50 p-6">
					<div class="mb-4 flex items-center">
						<div class="mr-3 text-2xl">📝</div>
						<h3 class="text-lg font-semibold text-gray-900">Note</h3>
					</div>
					<p class="mb-2 font-semibold text-gray-800">
						<strong>Does this already sound too complicated?</strong> 🥴
					</p>
					<p class="text-gray-700">
						Don't worry, it is still early days, but already some basic functionality, such as
						validating latency and timing in your lab, is already as simple as running an app on
						whatever devices you plan to use in research.
					</p>
				</div>
			</div>

			<div class="lg:w-64">
				<a
					href="/FINAL-Coop_comp_paradigm-A0Poster_reduced.pdf"
					class="block transition-transform hover:scale-105"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="rounded-lg border bg-white p-4 shadow-md">
						<div class="aspect-[208/293] rounded bg-gray-200">
							<img
								src="/poster-thumbnail.jpg"
								alt="Poster for the framework and paradigm"
								class="h-full w-full object-cover"
							/>
						</div>
						<p class="mt-2 text-sm text-gray-600">
							Preview of the conference poster for the framework and paradigm
						</p>
					</div>
				</a>
			</div>
		</section>

		<!-- Project Components -->
		<section class="mb-16">
			<h2 class="mb-8 text-3xl font-bold text-gray-900">Project Components</h2>

			<!-- Core -->
			<div class="mb-12">
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">
					Core <span class="text-xl">🍎</span>
				</h3>
				<div class="rounded-lg border bg-white p-6 shadow-sm">
					<p class="mb-4 text-gray-700">
						The core of this project is the
						<a
							href="https://github.com/NexusDynamic/liblsl.dart/tree/main/packages/liblsl"
							class="text-blue-600 underline hover:text-blue-800"
						>
							Dart native liblsl wrapper
						</a>
						which makes LSL integration into your project a breeze.
					</p>
					<p class="text-gray-700">
						This already supports <strong>Android</strong>, <strong>iOS</strong>,
						<strong>Linux</strong>, <strong>MacOS</strong> and <strong>Windows</strong>.
					</p>
				</div>

				<div class="mt-6">
					<h4 class="mb-4 text-xl font-semibold text-gray-800">
						Device Specific Libraries <span class="text-lg">📱</span>
					</h4>
					<div class="rounded-lg border bg-gray-50 p-6">
						<p class="text-gray-700">
							While it's pretty easy to get the liblsl dart native library working in most
							environments, sometimes a little extra effort is required, and as such, there is a
							liblsl
							<a
								href="https://github.com/NexusDynamic/Bela-liblsl"
								class="text-blue-600 underline hover:text-blue-800"
							>
								pre-compiled build for the Bela
							</a>
							(Beaglebone black) available.
						</p>
					</div>
				</div>
			</div>

			<!-- Add-on Packages -->
			<div class="mb-12">
				<h3 class="mb-6 text-2xl font-semibold text-gray-800">Add-on Packages</h3>

				<div class="mb-8">
					<h4 class="mb-4 text-xl font-semibold text-gray-800">
						Timing and Latency Analysis <span class="text-lg">🕦</span>
					</h4>
					<div class="space-y-4">
						<div class="rounded-lg border bg-white p-6 shadow-sm">
							<ul class="space-y-3 text-gray-700">
								<li>
									<strong>liblsl_coordinator</strong> - currently work in progress tool to automatically
									coordinate, control and set up communication between all the devices involved in your
									experiment
								</li>
								<li>
									<a
										href="https://github.com/NexusDynamic/liblsl.dart/tree/main/packages/liblsl_timing"
										class="text-blue-600 underline hover:text-blue-800"
									>
										<strong>liblsl_timing</strong>
									</a>
									- App based multi-device latency, sync and interactive timing tests with automatic
									device coordination via LSL
								</li>
								<li>
									<a
										href="https://github.com/NexusDynamic/liblsl.dart/tree/main/packages/liblsl_analysis"
										class="text-blue-600 underline hover:text-blue-800"
									>
										<strong>liblsl_analysis</strong>
									</a>
									- Analysis of results from the timing tests in liblsl_timing
								</li>
							</ul>
						</div>
						<div class="rounded-lg border bg-blue-50 p-6">
							<p class="text-blue-800">
								If you have a
								<a
									href="https://bela.io/"
									class="font-semibold text-blue-600 underline hover:text-blue-800"
								>
									Bela
								</a>,
								<a
									href="https://github.com/NexusDynamic/bela-lsl-timing"
									class="font-semibold text-blue-600 underline hover:text-blue-800"
								>
									code is available
								</a>
								to validate the end-to-end latency of devices using photodiodes and FSR sensors.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Experimental Paradigm -->
		<section class="mb-16">
			<h2 class="mb-6 text-3xl font-bold text-gray-900">
				Experimental Paradigm for Simultaneous Cooperation and Competition
				<span class="text-2xl">🤝</span>
			</h2>
			<div class="rounded-lg border bg-white p-8 shadow-sm">
				<p class="mb-4 text-gray-700">
					<a
						href="https://github.com/NexusDynamic/RiseTogether"
						class="text-blue-600 underline hover:text-blue-800"
					>
						<strong>RiseTogether</strong>
					</a>
					is a novel videogame style paradigm for investigating simultaneous collaboration and competition
					in groups. It is flexible allowing for varying group sizes, and is built around the dart liblsl
					framework for automatically coordinating and configuring the experiment in different labs,
					on different devices, with different numbers of participants.
				</p>
				<p class="text-gray-700">For more info see the repository or the poster linked above.</p>
			</div>
		</section>

		<!-- Related Packages -->
		<section class="mb-16">
			<h2 class="mb-6 text-3xl font-bold text-gray-900">Related packages</h2>
			<div class="rounded-lg border bg-white p-8 shadow-sm">
				<p class="mb-6 text-gray-700">
					Some useful packages have been developed for Flutter and Dart development which may be
					useful more generally beyond group research projects and can be added to apps by
					developers, these are:
				</p>
				<ul class="space-y-4 text-gray-700">
					<li>
						<a
							href="https://pub.dev/packages/flutter_multicast_lock"
							class="text-blue-600 underline hover:text-blue-800"
						>
							<strong>flutter_multicast_lock</strong>
						</a>
						(<a
							href="https://github.com/NexusDynamic/flutter_multicast_lock"
							class="text-blue-600 underline hover:text-blue-800">source</a
						>) - a package to acquire multicast locks on Android (but won't break on other
						platforms)
					</li>
					<li>
						<a
							href="https://pub.dev/packages/flutter_refresh_rate_control"
							class="text-blue-600 underline hover:text-blue-800"
						>
							<strong>flutter_refresh_rate_control</strong>
						</a>
						(<a
							href="https://github.com/NexusDynamic/flutter_refresh_rate_control"
							class="text-blue-600 underline hover:text-blue-800">source</a
						>) - a package that helps attempt to make android and iOS devices use the highest
						refresh rate possible for their screen (e.g. ProMotion) and tries to disable Android's
						Adaptive Refresh Rate (ARR)
					</li>
					<li>
						<a
							href="https://pub.dev/packages/easy_shared_preferences"
							class="text-blue-600 underline hover:text-blue-800"
						>
							<strong>easy_shared_preferences</strong>
						</a>
						(<a
							href="https://github.com/NexusDynamic/easy_shared_preferences"
							class="text-blue-600 underline hover:text-blue-800">source</a
						>) - a package that wraps shared_preferences to make managing your flutter app settings
						easier and modular
					</li>
				</ul>
			</div>
		</section>

		<!-- Footer -->
		<footer class="mt-16 border-t pt-8 text-center">
			<p class="text-gray-600">
				Learn more at
				<a
					href="https://github.com/NexusDynamic"
					class="text-blue-600 underline hover:text-blue-800"
				>
					github.com/NexusDynamic
				</a>
			</p>
		</footer>
	</div>
</main>
