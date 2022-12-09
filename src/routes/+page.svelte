<script>
	import { goto, prefetchRoutes } from '$app/navigation';
	import OrganizerProfile from '../components/OrganizerProfile.svelte';
	import Navbar from '../components/Navbar.svelte';
	import { inview } from 'svelte-inview';
	import { fade, fly } from 'svelte/transition';

	import { onMount } from 'svelte';

	let toggleNavbar = false;
	let toggleNavbar1 = false;

	import MediaQuery from '../components/MediaQuery.svelte';
	import chairpersons from '../components/chairpersons.json';
	import ProfileModal from '../components/ProfileModal.svelte';

	let showModal = [
		false, false, false, false, false, false, false, false, false
	];

	// onMount(async () => {
	// 	const res = await fetch('/');
	// });
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
									<div class="card" style="display:flex; justify-content: center; align-content: center;"
										on:click={() => showModal[person.index] = true}
									>
										<OrganizerProfile name={person.name} title={person.title} image={person.image}
														  link={chairpersons[3].link}
										/>
									</div>
								{/if}
							{/each}
						</div>
						<div class="card mt-10" style="display:flex; justify-content: center; align-content: center;"
							on:click={() => showModal[chairpersons[3].index] = true}
						>
							<OrganizerProfile
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
									<!-- svelte-ignore a11y-click-events-have-key-events -->
									<div class="card" style="display:flex; justify-content: center; align-content: center;"
										on:click={() => showModal[person.index] = true}
									>
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
									<div class="card" style="display:flex; justify-content: center; align-content: center;"
										on:click={() => showModal[person.index] = true}
									>
										<OrganizerProfile name={person.name} title={person.title} image={person.image}
														  link={person.link}
										/>
									</div>
								{/if}
							{/each}
						</div>
						<div class="mt-10" style="display:flex; justify-content: center; align-content: center;">
							<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5">
								<div class="card" on:click={() => showModal[chairpersons.length-2] = true}>
								<OrganizerProfile
										name={chairpersons[chairpersons.length - 2].name}
										title={chairpersons[chairpersons.length - 2].title}
										image={chairpersons[chairpersons.length - 2].image}
										link={chairpersons[chairpersons.length - 2].link}
								/>
								</div>
								<div class="card" on:click={() => showModal[chairpersons.length-1] = true}>
								<OrganizerProfile
										name={chairpersons[chairpersons.length - 1].name}
										title={chairpersons[chairpersons.length - 1].title}
										image={chairpersons[chairpersons.length - 1].image}
										link={chairpersons[chairpersons.length - 1].link}
								/>
								</div>
							</div>
						</div>
					{/if}
				</MediaQuery>
				<MediaQuery query="(min-width: 1024px)" let:matches>
					{#if matches}
						<div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
							{#each chairpersons as person}
								{#if person.team === 'orga' && person.title !== 'Chief of Media'}
									<div class="card" style="display:flex; justify-content: center; align-content: center;"
										on:click={() => showModal[person.index] = true}
									>
										<OrganizerProfile name={person.name} title={person.title} image={person.image} />
									</div>
								{/if}
							{/each}
						</div>
						<div class="card mt-10" style="display:flex; justify-content: center; align-content: center;"
							on:click={() => showModal[chairpersons.length-1] = true}
						>
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

{#if showModal[0]}
    <ProfileModal name="Natalia Velea-Grumezea" image="/profile_pictures/nati-secretary_general.jpg" visible={showModal[0]} onClose="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Greetings! My name is Natalia and I will be the Secretary General of VianuMUN 2023! It is my absolute pleasure to be here today, as VianuMUN is one of the MUNs I hold very close to my heart.</p><br/>
			<p>VianuMUN 2020 was my first MUN ever, VianuMUN 2022 was one of my first chairing experiences and now I have the opportunity to be organizing the next edition. I am extremely grateful for our team, because without them, VianuMUN wouldn’t be taking place right now. MUNs had a very big impact on me and the way I developed on a personal and professional level, so I encourage every single one of you, first-timer or not, to give MUNs a chance and come debate with us in February!</p><br/>
			<p>Without further ado, I propose a motion to start counting the days left until VianuMUN begins! 140 days left until you will have the best MUN experience!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[1]}
    <ProfileModal name="Mara Andronache" image="/profile_pictures/mara_andronache-deputy_secretary_general.jpg" visible={showModal[1]} onClose="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Hello hello, everyone! My name is Mara and it is my utmost pleasure to be this year’s Deputy Secretary General at VianuMUN 2023.</p><br/>
			<p>I hold this conference extremely close to my heart. VianuMUN 2020 is the place where my MUN journey started, VianuMUN 2022 is where I first chaired and now, at VianuMUN 2023, it will be my first time occupying a position in the secretariat.</p><br/>
			<p>I can assure you that we are going to give you the best MUN experience, especially knowing how much we are working on it right now. So, what are you waiting for? I am expecting to see each and every person that reads this in February!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[2]}
    <ProfileModal name="Ana Aronescu" image="/profile_pictures/ana_aronescu-pga.jpg" visible={showModal[2]} onClose="{() => showModal[2] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">

        </div>
    </ProfileModal>
{/if}

{#if showModal[3]}
    <ProfileModal name="Lucian Cismaru" image="/profile_pictures/lucian_cismaru-dpga.jpg" visible={showModal[3]} onClose="{() => showModal[3] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Hello everybody, my name is Lucian and I will be the Deputy President of the General Assembly for this edition of Vianu MUN. I am a junior at “Grigore Moisil” National High School and this will be my 13th MUN conference (ironic, I know). I am passionate about psychology, history and debating in general, especially on legal topics. </p><br/>
			<p>I am an ICJ enthusiast, but I don’t shy away from GA committees either. As a participant in last year’s edition of Vianu MUN I had a lot of fun and I got the chance to participate in debates that were both challenging and diverse so I will do my best for your experience to be the same this year.</p><br/>
			<br/>
			<p>See you in February🥰!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[4]}
    <ProfileModal name="Alexandra Breahna" image="/profile_pictures/alexandra_breahna-conference_manager.jpg" visible={showModal[4]} onClose="{() => showModal[4] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Hello everyone!! <br/>My name is Alexandra and I will be the Conference Manager of VianuMUN 2023!</p><br/>
			<p>As this event bears the name of my school, I feel honoured to be part of its organising team and I am looking forward to seeing our efforts beautifully come together as the event approaches.</p><br/>
			<p>Our team is working towards putting together the best MUN experience and we are thrilled to get to experience it alongside all of you. </p><br/>
			<p>As it will take place in one of this school year’s multiple breaks, it is undebatable (get it) that you should join us for an extended weekend of debating accompanied by a pleasant crowd and a carefully chosen schedule for you to enjoy&lt;3</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[5]}
    <ProfileModal name="Andrei Voinea" image="/profile_pictures/andrei_voinea-chief_of_staff.jpg" visible={showModal[5]} onClose="{() => showModal[5] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Hello, my name is Andrei, I am the chief of staff for this year’s edition of VianuMUN.</p><br/>
			<p>I am a junior at the National College of Informatics Tudor Vianu, and I’ll do my best to help this conference as much as I can.</p><br/>
        </div>
    </ProfileModal>
{/if}

{#if showModal[6]}
    <ProfileModal name="Miruna Neamu" image="/profile_pictures/neamu_miruna-chief_of_finance.jpg" visible={showModal[6]} onClose="{() => showModal[6] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Hi, everyone! My name is Miruna Neamu and I will be the Chief of Finance of VianuMUN 2023!</p><br/>
			<p>I began my journey in the world of MUN at the beginning of 2022 and I am more than excited to get to be part of this amazing organising team, not even a year later. I enjoy studying politics, law and economics and when I am not a judge at a MUN conference or attending a course in one of the topics mentioned previously, you might find me travelling or writing articles.</p><br/>
			<p>I consider that MUN conferences are the best opportunity  for one to surround themselves with passionate, intelligent and fun people, while getting more in depth of topics that have a great impact on the world we live in.</p><br/>
			<p>This being said, I cannot wait to get to see your true potential at VianuMUN 2023!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[7]}
	<ProfileModal name="Andreea Fechet" image="/profile_pictures/fechet_andreea-chief_of_photo.jpg" visible={showModal[7]} onClose="{() => showModal[7] = false}">
		<div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Heyoo!</p><br/>
			<p>My name is Andreea and I am delighted to occupy the position of Chief of Photography at the VianuMUN. I'm 17 years old, currently a junior at Grigore Moisil National College. I am a photographer from the Republic of Moldova, based in Bucharest.</p><br/>
			<p>I consider myself an ambitious, motivated and a creative person, but for this I need to be constantly in touch with the world to experience as much as possible. I found no better way to do that than through photography.</p><br/>
			<p>A photographer's role is not only to capture extraordinary photos, but to capture extraordinary moments. I have attended 3 MUN conferences always as part of the Photography Team, but I believe that this particular one will be my greatest achievement.</p><br/>
			<p>I am really excited to be part of such an amazing project and I hope you are going to have a wonderful experience!:DD</p>
		</div>
	</ProfileModal>
{/if}

{#if showModal[8]}
	<ProfileModal name="Andreea Fechet" image="/profile_pictures/mara_bogdan-chief_of_media.jpg" visible={showModal[8]} onClose="{() => showModal[8] = false}">
		<div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
			<p>Hey everyone! </p><br/>
			<p>My name is Mara and I’m a sophomore at “I.L. Caragiale'' National College. I enjoy everything related to media, marketing and public relations, therefore I am beyond excited to be this edition of VianuMUN’s Chief of Media! I am a very positive person, I am eager to learn, I enjoy facing challenges and experiencing new things.</p><br/>
			<p>I love meeting people and making friends from everywhere and I must say that I am a huge perfectionist :) I cannot wait to meet you all and have a blast at this wonderful conference!</p><br/>
			<p> See you in February 🫶🏻</p>
		</div>
	</ProfileModal>
{/if}

<style>
	.card {
        transition: all .2s ease-in-out;
	}
</style>
