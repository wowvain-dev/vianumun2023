<script>
	import { goto, prefetchRoutes } from '$app/navigation';
	import OrganizerProfile from '../components/OrganizerProfile.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	import { onMount } from 'svelte';

	let toggleNavbar = false;

	// import chairpersons from '../components/chairpersons.json';
	import MediaQuery from '../components/MediaQuery.svelte';
	import chairpersons from '../components/chairpersons.json';

	onMount(async () => {
		const res = await fetch('/');
	});
</script>

{#if toggleNavbar}
	<div in:fade|local out:fly|local={{ y: -200, duration: 1000 }}>
		<Navbar />
	</div>
{:else}
	<div />
{/if}
<div class="flex-col mb-32">
	<div
		id="hero_content"
		class="hero flex-1 bg-fixed bg-transparent"
		style="
         height: 90vh;
         background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/profile_pictures/grup_vianumun.jpg');"
	>
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="lg:text-5xl md:text-xl font-bold text-base-100 font-serif">
					Welcome to VianuMUN 2023
				</h1>
				<div class="my-10" />
				<!-- <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>-->
				<button
					class="btn btn-lg btn-wide btn-primary"
					on:click={() => {
						goto('/apply');
					}}>Apply Now!</button
				>
			</div>
		</div>
	</div>
	<div class="flex mx-[48vw] mt-5 animate-pulse justify-center content-center">
		<a href="#profiles" class="h-auto w-16 flex-none">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				version="1.1"
				viewBox="0 0 256 256"
				xml:space="preserve"
			>
				<defs />
				<g
					style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
					transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
				>
					<polygon
						points="0,38.92 2.83,36.08 45,78.25 87.17,36.08 90,38.92 45,83.92 "
						style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7a5c58; fill-rule: nonzero; opacity: 1;"
						transform="  matrix(1 0 0 1 0 0) "
					/>
					<polygon
						points="0,8.92 2.83,6.08 45,48.25 87.17,6.08 90,8.92 45,53.92 "
						style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: #7a5c58; fill-rule: nonzero; opacity: 1;"
						transform="  matrix(1 0 0 1 0 0) "
					/>
				</g>
			</svg>
		</a>
	</div>

	<div
		class="flex flex-col px-10 w-full mt-20 text-neutral"
		style="align-content: center; justify-content: center; display: flex;"
	>
		<span class="divider uppercase text-xl text-center">The Academic Team</span>
	</div>

	<div class="flex" style="display: flex; justify-content: center; align-content: center;">
		<div
			class="mt-10 w-[90vw]"
			use:inview={{}}
			on:change={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
			}}
			on:enter={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				toggleNavbar = true;
				console.log(toggleNavbar);
			}}
			on:leave={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				toggleNavbar = false;
				console.log(toggleNavbar);
			}}
		>
			<MediaQuery query="(max-width: 1023px)" let:matches>
				{#if matches}
					<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
						{#each chairpersons as person}
							{#if person.team === 'acad' && person.name !== 'Lucian Cismaru'}
								<div style="display:flex; justify-content: center; align-content: center;">
									<OrganizerProfile name={person.name} title={person.title} image={person.image} />
								</div>
							{/if}
						{/each}
					</div>
					<div class="mt-10" style="display:flex; justify-content: center; align-content: center;">
						<OrganizerProfile
								width="width: calc(40vw-5rem);"
								name={chairpersons[3].name}
								title={chairpersons[3].title}
								image={chairpersons[3].image}
						/>
					</div>
				{/if}
			</MediaQuery>
			<MediaQuery query="(min-width: 1024px)" let:matches>
				{#if matches}
					<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
						{#each chairpersons as person}
							{#if person.team === 'acad'}
								<div style="display:flex; justify-content: center; align-content: center;">
									<OrganizerProfile name={person.name} title={person.title} image={person.image} />
								</div>
							{/if}
						{/each}
					</div>
				{/if}
			</MediaQuery>
		</div>
	</div>

	<div
			class="flex flex-col px-10 w-full mt-20 text-neutral"
			style="align-content: center; justify-content: center; display: flex;"
	>
		<span class="divider uppercase text-xl text-center">The Organizing Team</span>
	</div>

	<div class="flex" style="display: flex; justify-content: center; align-content: center;">
		<div
				class="mt-10 w-[90vw]"
				use:inview={{}}
				on:change={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
			}}
				on:enter={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				toggleNavbar = true;
				console.log(toggleNavbar);
			}}
				on:leave={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				toggleNavbar = false;
				console.log(toggleNavbar);
			}}
		>
			<MediaQuery query="(max-width: 1023px)" let:matches>
				{#if matches}
					<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
						{#each chairpersons as person}
							{#if person.team === 'orga' &&
									person.title !== 'Chief of Photography' &&
									person.title !== 'Chief of Media'}
								<div style="display:flex; justify-content: center; align-content: center;">
									<OrganizerProfile name={person.name} title={person.title} image={person.image} />
								</div>
							{/if}
						{/each}
					</div>
					<div class="mt-10" style="display:flex; justify-content: center; align-content: center;">
						<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
							<OrganizerProfile
									width="width: calc(40vw-5rem);"
									name={chairpersons[chairpersons.length - 2].name}
									title={chairpersons[chairpersons.length - 2].title}
									image={chairpersons[chairpersons.length - 2].image}
							/>
							<OrganizerProfile
									width="width: calc(40vw-5rem);"
									name={chairpersons[chairpersons.length - 1].name}
									title={chairpersons[chairpersons.length - 1].title}
									image={chairpersons[chairpersons.length - 1].image}
							/>
						</div>
					</div>
				{/if}
			</MediaQuery>
			<MediaQuery query="(min-width: 1024px)" let:matches>
				{#if matches}
					<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
						{#each chairpersons as person}
							{#if person.team === 'orga' && person.title !== 'Chief of Media'}
								<div style="display:flex; justify-content: center; align-content: center;">
									<OrganizerProfile name={person.name} title={person.title} image={person.image} />
								</div>
							{/if}
						{/each}
					</div>
					<div class="mt-10" style="display:flex; justify-content: center; align-content: center;">
						<OrganizerProfile
								name={chairpersons[chairpersons.length - 1].name}
								title={chairpersons[chairpersons.length - 1].title}
								image={chairpersons[chairpersons.length - 1].image}
						/>
					</div>
				{/if}
			</MediaQuery>
		</div>
	</div>
</div>

<style>
</style>
