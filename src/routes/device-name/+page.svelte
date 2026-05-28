<svelte:head>
	<title>RiseTogether - device name entitlement screenshots</title>
	<meta name="description" content="Screenshots of rise-together for device name entitlement." />
</svelte:head>
<div class="container px-8">
	<h1 class="my-8 text-3xl font-bold">Screenshots from com.zeyus.rise-together</h1>
	<div class="grid w-full grid-cols-2 gap-4">
		<div class="relative">
			<figure>
				<figcaption class="absolute top-4 right-8 rounded-md bg-pink-700/50 p-2 shadow-2xl">
					Screenshot of the app where the device name is displayed.
				</figcaption>
				<img
					src="rt/rise-together-1.png"
					alt="Screenshot of the app where the device name is displayed."
				/>
			</figure>
		</div>
		<div class="relative">
			<figure>
				<figcaption class="absolute top-4 right-8 rounded-md bg-pink-700/50 p-2 shadow-2xl">
					Screenshot of networking and first screen.
				</figcaption>
				<img src="rt/rise-together-2.png" alt="Screenshot of networking and first screen" />
			</figure>
		</div>
		<div class="relative">
			<figure>
				<figcaption class="absolute top-4 right-8 rounded-md bg-pink-700/50 p-2 shadow-2xl">
					Screenshot of the experiment in progress.
				</figcaption>
				<img src="rt/rise-together-3.png" alt="Screenshot of the experiment in progress" />
			</figure>
		</div>
		<div class="relative">
			<figure>
				<figcaption class="absolute top-4 right-8 rounded-md bg-pink-700/50 p-2 shadow-2xl">
					Photo showing the experimental setup.
				</figcaption>
				<img src="rt/rise-together-4.jpg" alt="Demo of the experimental setup" />
			</figure>
		</div>
		<div class="relative">
			<figure>
				<figcaption class="absolute top-4 right-8 rounded-md bg-pink-700/50 p-2 shadow-2xl">
					Screenshot showing device names from connected / experiment devices.
				</figcaption>
				<img src="rt/rise-together-5.png" alt="Screenshot showing device names" />
			</figure>
		</div>
	</div>
	<h2 class="my-8 text-2xl font-bold">Example from logfile (demo data)</h2>
	<p class="my-4">Right now the devices just show hostname: localhost, device name: ios</p>
	<code class="my-8 block bg-gray-900 p-4 break-all text-pink-300">
		2026-05-28T14:13:10.883842 PLAYER_ASSIGNMENTS
		&lbrace;"assignments":&lbrace;"efcd01d2-d9ca-4e27-8c55-9012e6ce25c3":&lbrace;"nodeId":"efcd01d2-d9ca-4e27-8c55-9012e6ce25c3","nodeName":"RiseTogether_ios_localhost","teamId":0,"playerId":"player_efcd01d2","playerIdHash":990687789,"isCoordinator":false&rbrace;,"f676c8a1-5e60-4276-8eee-e02e02374ad6":&lbrace;"nodeId":"f676c8a1-5e60-4276-8eee-e02e02374ad6","nodeName":"RiseTogether_ios_localhost","teamId":1,"playerId":"player_f676c8a1","playerIdHash":440604787,"isCoordinator":false&rbrace;,"d19c3021-4dee-499a-9d75-9405a7e9e7ad":&lbrace;"nodeId":"d19c3021-4dee-499a-9d75-9405a7e9e7ad","nodeName":"RiseTogether_ios_localhost","teamId":0,"playerId":"player_d19c3021","playerIdHash":987309123,"isCoordinator":false&rbrace;,"279b6126-4542-44e6-a873-38521d034dac":&lbrace;"nodeId":"279b6126-4542-44e6-a873-38521d034dac","nodeName":"RiseTogether_ios_localhost","teamId":1,"playerId":"player_279b6126","playerIdHash":122395224,"isCoordinator":false&rbrace;&rbrace;,"team_counts":&lbrace;"0":2,"1":2&rbrace;&rbrace;</code
	>
</div>
