<script>
	import '../app.css';
	import Navbar from "../components/Navbar.svelte";
	import VianuLogo from "../components/VianuLogo.svelte";


	import {page} from "$app/stores";

	export const prerender = true;
</script>

{#if $page.url.pathname === '/'}
	<div></div>
{:else}
	<div>
		<Navbar />
	</div>
{/if}

<div style="overflow: visible;">
	<slot />
</div>

<footer class="footer flex py-5 px-7 bg-accent text-neutral-content justify-center content-center">
	<div class="h-[100px] w-[250px]">
		<VianuLogo color="#548278"/>
	</div>
	<div class="flex-1"></div>
	<div style="display: flex; flex-direction: column; justify-content: center; align-content: center;">
		<div class="flex w-full justify-center content-center">
			<span class="font-serif text-neutral
						 uppercase font-black
						 sm:text-md md:text-lg lg:text-xl
						 underline underline-offset-4
						 text-center tracking-[.5em]">Contact</span>
		</div>
<!--		TODO(wowvain-dev): change the socials icons to usernames for each platform and make em clickable-->
		<div class="flex-col mt-5">
			<div class="justify-center content-center hover:fill-base-200">
				<i class="fa fa-instagram text-2xl mr-1 text-neutral"></i>
				<a class="link text-center
						  sm:text-md md:text-lg lg:text-xl
						  ml-1 text-neutral hover:text-base-200 underline-offset-4" href="https://instagram.com/vianumun">
					@vianumun
				</a>
			</div>
<!--			<a class="fill-current btn btn-ghost"-->
<!--				><svg-->
<!--					xmlns="http://www.w3.org/2000/svg"-->
<!--					width="24"-->
<!--					height="24"-->
<!--					viewBox="0 0 24 24"-->
<!--					class="fill-current"-->
<!--				>-->
<!--					<path-->
<!--						d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"-->
<!--					/></svg-->
<!--				></a-->
<!--			>-->
<!--			<a class="fill-current btn btn-ghost"-->
<!--				><svg-->
<!--					xmlns="http://www.w3.org/2000/svg"-->
<!--					width="24"-->
<!--					height="24"-->
<!--					viewBox="0 0 24 24"-->
<!--					class="fill-current"-->
<!--				>-->
<!--					<path-->
<!--						d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"-->
<!--					/></svg-->
<!--				></a-->
<!--			>-->
		</div>
	</div>
</footer>
