<script>
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import MediaQuery from './MediaQuery.svelte';

	export let isVisible = true;

	const com = [
		'/disec',
		'/international_criminal_court',
		'/interpol',
		'/legal',
		'/security_council',
		'/sochum',
		''
	];

	/**
	 * @type {string[]}
	 */
	const committees = [];

	for (let committee in com) {
		committees.push('/committees' + com[committee]);
	}

	/**
	 * @type {number | null | undefined}
	 */
	let width;
</script>

<svelte:window bind:innerWidth={width} />

{#if isVisible}
	{#if width != undefined && width != null && width <= 940}
		<div class="flex-col" transition:fade|local>
			<div
				class="flex flex-row flex-initial fixed mx-5 py-5 px-2 acrylic mt-3 rounded-lg z-[999]"
				style="top: 0; right: 0; left: 0; background: rgba(29, 66, 58, 0.7)"
			>
				<div class="flex-1">
					<a class="btn btn-ghost text-xl normal-case text-base-100" href="/">VianuMUN</a>
				</div>
				<div
					class="flex-none mt-auto mb-auto justify-center content-center dropdown dropdown-end"
					data-sveltekit-prefetch
				>
					<button class="btn btn-ghost">
						<i class="fa fa-bars text-2xl text-base-100" />
					</button>
					<div
						class="dropdown-content w-52 acrylic shadow card card-compact"
						style="background: rgba(29, 66, 58, 0.7)"
					>
						<div class="card-body">
							<ul class="menu menu-vertical p-0" daha-sveltekit-prefetch>
								{#if $page.url.pathname === '/apply'}
									<li>
										<a
											class="mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 "
											href="https://docs.google.com/forms/d/e/1FAIpQLSe8uqh672dAAtV42bJSdnasxbqxd6Ms81Q9aSL8rRFtENTgQw/viewform?usp=send_form"
											>Apply</a
										>
									</li>
								{:else}
									<li>
										<a
											class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 "
											href="https://docs.google.com/forms/d/e/1FAIpQLSe8uqh672dAAtV42bJSdnasxbqxd6Ms81Q9aSL8rRFtENTgQw/viewform?usp=send_form"
											>Apply</a
										>
									</li>
								{/if}

								{#if $page.url.pathname === '/about'}
									<li>
										<a
											class="text-base-200 mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 "
											href="/about">About us</a
										>
									</li>
								{:else}
									<li>
										<a
											class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 "
											href="/about">About us</a
										>
									</li>
								{/if}
								<li>
									{#if committees.includes($page.url.pathname)}
										<a
											class="mr-5 text-base-100 uppercase border-2 border-transparent underline underline-offset-8
								  hover:border-base-200"
											href="/committees"
										>
											Committees
											<svg
												class="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										</a>
									{:else}
										<a
											class="mr-5 text-base-100 uppercase border-2 border-transparent
								            hover:border-base-200"
											href="/committees"
										>
											Committees
											<svg
												class="fill-current"
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 24 24"
											>
												<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
											</svg>
										</a>
									{/if}
									<ul class="p-2 bg-base-100 acrylic" style="background: rgba(29, 66, 58, 0.7); left: auto; right: 100%;">
										{#if $page.url.pathname === '/committees/disec'}
											<li>
												<a
													href="/committees/disec"
													class="btn btn-ghost outline outline-1 outline-base-100
								   		 normal-case text-base-100 uppercase"
												>
													DISEC
												</a>
											</li>
										{:else}
											<li>
												<a
													href="/committees/disec"
													class="btn btn-ghost normal-case text-base-100 uppercase"
												>
													DISEC
												</a>
											</li>
										{/if}
										{#if $page.url.pathname === '/committees/sochum'}
											<li>
												<a
													href="/committees/sochum"
													class="btn btn-ghost outline outline-1 outline-base-100
								   normal-case text-base-100 uppercase"
												>
													SOCHUM
												</a>
											</li>
										{:else}
											<li>
												<a
													href="/committees/sochum"
													class="btn btn-ghost normal-case text-base-100 uppercase"
												>
													SOCHUM
												</a>
											</li>
										{/if}
										{#if $page.url.pathname === '/committees/legal'}
											<li>
												<a
													href="/committees/legal"
													class="btn btn-ghost
								outline outline-1 outline-base-100
								normal-case text-base-100 uppercase"
												>
													LEGAL
												</a>
											</li>
										{:else}
											<li>
												<a
													href="/committees/legal"
													class="btn btn-ghost normal-case text-base-100 uppercase"
												>
													LEGAL
												</a>
											</li>
										{/if}
										{#if $page.url.pathname === '/committees/security_council'}
											<li>
												<a
													href="/committees/security_council"
													class="btn btn-ghost outline outline-1 outline-base-100
								normal-case text-base-100 uppercase"
												>
													Security Council
												</a>
											</li>
										{:else}
											<li>
												<a
													href="/committees/security_council"
													class="btn btn-ghost normal-case text-base-100 uppercase"
												>
													Security Council
												</a>
											</li>
										{/if}
										{#if $page.url.pathname === '/committees/international_criminal_court'}
											<li>
												<a
													href="/committees/international_criminal_court"
													class="btn btn-ghost outline outline-1 outline-base-100
							normal-case text-base-100 uppercase"
												>
													International Criminal Court
												</a>
											</li>
										{:else}
											<li>
												<a
													href="/committees/international_criminal_court"
													class="btn btn-ghost normal-case text-base-100 uppercase"
												>
													International Criminal Court
												</a>
											</li>
										{/if}
										{#if $page.url.pathname === '/committees/interpol'}
											<li>
												<a
													href="/committees/interpol"
													class="btn btn-ghost outline outline-1 outline-base-100
							normal-case text-base-100 uppercase"
												>
													INTERPOL
												</a>
											</li>
										{:else}
											<li>
												<a
													href="/committees/interpol"
													class="btn btn-ghost normal-case text-base-100 uppercase"
												>
													INTERPOL
												</a>
											</li>
										{/if}
									</ul>
								</li>
								<li>
									<a
										class="mr-5 text-base-100 uppercase border-2 border-transparent
								  hover:border-base-200"
									>
										Our Team
										<svg
											class="fill-current"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
										>
											<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
										</svg>
									</a>
									<ul class="p-2 bg-base-100 acrylic" style="background: rgba(29, 66, 58, 0.7); left: auto; right: 100%;">
										<li>
											<a class="btn btn-ghost normal-case text-base-100" href="/">Chairpersons</a>
										</li>
										<li>
											<a class="btn btn-ghost normal-case text-base-100" href="/">Submenu 2</a>
										</li>
									</ul>
								</li>
								{#if $page.url.pathname === '/contact'}
									<li>
										<a
											class="text-base-200 mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 "
											href="/contact">Contact</a
										>
									</li>
								{:else}
									<li>
										<a
											class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 "
											href="/contact">Contact</a
										>
									</li>
								{/if}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!-- <div class="flex flex-col flex-initial fixed mx-5 py-5 px-2 acrylic mt-3 rounded-lg z-[999]"> -->
			<!--   <span>test</span> -->
			<!-- </div> -->
		</div>
	{:else}
		<div class="flex-col" transition:fade|local>
			<div
				class="flex flex-row flex-initial fixed mx-5 py-5 px-2 acrylic mt-3 rounded-lg z-[999]"
				style="top: 0; right: 0; left: 0; background: rgba(29, 66, 58, 0.7)"
			>
				<div class="flex-1">
					<a class="btn btn-ghost text-xl normal-case text-base-100 " href="/">VianuMUN</a>
				</div>
				<div class="flex-none">
					<ul class="menu menu-horizontal p-0" data-sveltekit-prefetch>
						{#if $page.url.pathname === '/apply'}
							<li>
								<a
									class="mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 "
									href="https://docs.google.com/forms/d/e/1FAIpQLSe8uqh672dAAtV42bJSdnasxbqxd6Ms81Q9aSL8rRFtENTgQw/viewform?usp=send_form"
									>Apply</a
								>
							</li>
						{:else}
							<li>
								<a
									class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 "
									href="https://docs.google.com/forms/d/e/1FAIpQLSe8uqh672dAAtV42bJSdnasxbqxd6Ms81Q9aSL8rRFtENTgQw/viewform?usp=send_form"
									>Apply</a
								>
							</li>
						{/if}

						{#if $page.url.pathname === '/about'}
							<li>
								<a
									class="text-base-200 mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 "
									href="/about">About us</a
								>
							</li>
						{:else}
							<li>
								<a
									class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 "
									href="/about">About us</a
								>
							</li>
						{/if}
						<li>
							{#if committees.includes($page.url.pathname)}
								<a
									class="mr-5 text-base-100 uppercase border-2 border-transparent underline underline-offset-8
								  hover:border-base-200"
									href="/committees"
								>
									Committees
									<svg
										class="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</a>
							{:else}
								<a
									class="mr-5 text-base-100 uppercase border-2 border-transparent
								  hover:border-base-200"
									href="/committees"
								>
									Committees
									<svg
										class="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</a>
							{/if}
							<ul class="p-2 bg-base-100 acrylic" style="background: rgba(29, 66, 58, 0.7)">
								{#if $page.url.pathname === '/committees/disec'}
									<li>
										<a
											href="/committees/disec"
											class="btn btn-ghost outline outline-1 outline-base-100
								   		 normal-case text-base-100 uppercase"
										>
											DISEC
										</a>
									</li>
								{:else}
									<li>
										<a
											href="/committees/disec"
											class="btn btn-ghost normal-case text-base-100 uppercase"
										>
											DISEC
										</a>
									</li>
								{/if}
								{#if $page.url.pathname === '/committees/sochum'}
									<li>
										<a
											href="/committees/sochum"
											class="btn btn-ghost outline outline-1 outline-base-100
								   normal-case text-base-100 uppercase"
										>
											SOCHUM
										</a>
									</li>
								{:else}
									<li>
										<a
											href="/committees/sochum"
											class="btn btn-ghost normal-case text-base-100 uppercase"
										>
											SOCHUM
										</a>
									</li>
								{/if}
								{#if $page.url.pathname === '/committees/legal'}
									<li>
										<a
											href="/committees/legal"
											class="btn btn-ghost
								outline outline-1 outline-base-100
								normal-case text-base-100 uppercase"
										>
											LEGAL
										</a>
									</li>
								{:else}
									<li>
										<a
											href="/committees/legal"
											class="btn btn-ghost normal-case text-base-100 uppercase"
										>
											LEGAL
										</a>
									</li>
								{/if}
								{#if $page.url.pathname === '/committees/security_council'}
									<li>
										<a
											href="/committees/security_council"
											class="btn btn-ghost outline outline-1 outline-base-100
								normal-case text-base-100 uppercase"
										>
											Security Council
										</a>
									</li>
								{:else}
									<li>
										<a
											href="/committees/security_council"
											class="btn btn-ghost normal-case text-base-100 uppercase"
										>
											Security Council
										</a>
									</li>
								{/if}
								{#if $page.url.pathname === '/committees/international_criminal_court'}
									<li>
										<a
											href="/committees/international_criminal_court"
											class="btn btn-ghost outline outline-1 outline-base-100
							normal-case text-base-100 uppercase"
										>
											International Criminal Court
										</a>
									</li>
								{:else}
									<li>
										<a
											href="/committees/international_criminal_court"
											class="btn btn-ghost normal-case text-base-100 uppercase"
										>
											International Criminal Court
										</a>
									</li>
								{/if}
								{#if $page.url.pathname === '/committees/interpol'}
									<li>
										<a
											href="/committees/interpol"
											class="btn btn-ghost outline outline-1 outline-base-100
							normal-case text-base-100 uppercase"
										>
											INTERPOL
										</a>
									</li>
								{:else}
									<li>
										<a
											href="/committees/interpol"
											class="btn btn-ghost normal-case text-base-100 uppercase"
										>
											INTERPOL
										</a>
									</li>
								{/if}
							</ul>
						</li>
						<li>
							<a
								class="mr-5 text-base-100 uppercase border-2 border-transparent
								  hover:border-base-200"
							>
								Our Team
								<svg
									class="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
								>
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul class="p-2 bg-base-100 acrylic" style="background: rgba(29, 66, 58, 0.7)">
								<li>
									<a class="btn btn-ghost normal-case text-base-100 uppercase ">Chairpersons</a>
								</li>
								<li>
									<a class="btn btn-ghost normal-case text-base-100 uppercase ">Submenu 2</a>
								</li>
							</ul>
						</li>
						{#if $page.url.pathname === '/contact'}
							<li>
								<a
									class="text-base-200 mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 "
									href="/contact">Contact</a
								>
							</li>
						{:else}
							<li>
								<a
									class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 "
									href="/contact">Contact</a
								>
							</li>
						{/if}
					</ul>
				</div>
			</div>
		</div>
	{/if}
{:else}
	<div />
{/if}

<style>
	.acrylic {
		background: rgba(100, 100, 100, 0.5);
		-webkit-backdrop-filter: blur(10px) saturate(125%);
		backdrop-filter: blur(10px) saturate(125%);
	}

	.acrylic ul {
		/*background: rgba(100, 100, 100, 0.8);*/
	}
</style>
