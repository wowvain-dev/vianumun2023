<script>
	import { page } from '$app/stores';
	import {fade} from 'svelte/transition';
	import {goto} from "$app/navigation";
	export let isVisible = true;
</script>

{#if isVisible}
	<div class="flex-col" transition:fade>
		<div
			class="flex flex-row flex-initial fixed mx-5 py-5 px-2 acrylic mt-3 rounded-lg z-20"
			style="top: 0; right: 0; left: 0; background: rgba(29, 66, 58, 0.7)"
		>
			<div class="flex-1 grow">
				<a class="btn btn-ghost text-xl normal-case text-base-100 font-serif" href="/">VianuMUN</a>
			</div>
			<div class="flex-none">
				<ul class="menu menu-horizontal p-0" data-sveltekit-prefetch>
					{#if $page.url.pathname === '/apply'}
						<li><a class="text-base-200 mr-5 text-base-100 uppercase
							border-2 border-transparent underline underline-offset-8 hover:border-base-200 font-serif"
							   href="/apply">Apply</a></li>
					{:else}
						<li><a class="mr-5 text-base-100 uppercase
							border-2 border-transparent hover:border-base-200 font-serif" href="/apply">Apply</a></li>
					{/if}
					<li>
						<a class="mr-5 text-base-100 uppercase font-serif indent-[10%] border-2 border-transparent
								  hover:border-base-200" tabindex="0">
							Parent
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
						<ul class="p-2 bg-base-100 acrylic" style="background: rgba(29, 66, 58, 0.7)"
						>
							<li><a class="btn btn-ghost normal-case text-base-100 uppercase font-serif">Chairpersons</a></li>
							<li><a class="btn btn-ghost normal-case text-base-100 uppercase font-serif">Submenu 2</a></li>
						</ul>
					</li>
					<li><a class="text-base-100 uppercase border-2 border-transparent
							hover:border-base-200 font-serif">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
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
