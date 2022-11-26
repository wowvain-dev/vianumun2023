<script>
	import { goto, prefetchRoutes } from '$app/navigation';
	import OrganizerProfile from '../components/OrganizerProfile.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	import { onMount } from 'svelte';

	let toggleNavbar = false;
	let toggleNavbar1 = false;

	// import chairpersons from '../components/chairpersons.json';
	import MediaQuery from '../components/MediaQuery.svelte';
	import chairpersons from '../components/chairpersons.json';

	onMount(async () => {
		const res = await fetch('/');
	});
</script>

<Navbar isVisible={toggleNavbar || toggleNavbar1}/>

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

	<section id="team">
		<div class="flex justify-center content-center mt-8 mb-20">
			<a class="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-xl
					rounded-full flex items-center justify-center"
			   href="#team"
			>
				<svg class="w-6 h-6 text-violet-500" fill="none" stroke-linecap="round"
					 stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="#356359">
					<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
			</a>
		</div>
		<div
				class="flex flex-col px-10 w-full text-neutral"
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
				toggleNavbar1 = true;
			}}
					on:leave={(event) => {
				const { inView, entry, scrollDirection, observer, node } = event.detail;
				toggleNavbar1 = false;
			}}
			>
				<MediaQuery query="(max-width: 1023px)" let:matches>
					{#if matches}
						<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
							{#each chairpersons as person}
								{#if person.team === 'acad' && person.name !== 'Lucian Cismaru'}
									<div style="display:flex; justify-content: center; align-content: center;">
										<OrganizerProfile name={person.name} title={person.title} image={person.image}
														  link={chairpersons[3].link}
										/>
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
									link={chairpersons[3].link}
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
										<OrganizerProfile name={person.name} title={person.title} image={person.image}
														  link={person.link}
										/>
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
										<OrganizerProfile name={person.name} title={person.title} image={person.image}
														  link={person.link}
										/>
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
										link={chairpersons[chairpersons.length - 2].link}
								/>
								<OrganizerProfile
										width="width: calc(40vw-5rem);"
										name={chairpersons[chairpersons.length - 1].name}
										title={chairpersons[chairpersons.length - 1].title}
										image={chairpersons[chairpersons.length - 1].image}
										link={chairpersons[chairpersons.length - 1].link}
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

	</section>

</div>

<style>
</style>
