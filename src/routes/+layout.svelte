<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import VianuLogo from '../components/VianuLogo.svelte';

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import Footer from '../components/Footer.svelte';

	export const prerender = true;
</script>

<!--NAVBAR-->
{#if $page.url.pathname === '/'}
	<div />
{:else}
	<div style="z-index: 999">
		<Navbar />
	</div>
{/if}

<!-- CONTENT -->
<div style="overflow: visible;">
	<slot />
</div>

<!--FOOTER-->
<div class="mt-10">
	<Footer />
</div>
