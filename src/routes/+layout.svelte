<script>
	import '../app.css';
	import Navbar from "../components/Navbar.svelte";
	import VianuLogo from "../components/VianuLogo.svelte";


	import {page} from "$app/stores";
	import {goto} from "$app/navigation";
	import Footer from "../components/Footer.svelte";

	export const prerender = true;
</script>

<!--NAVBAR-->
{#if $page.url.pathname === '/'}
	<div></div>
{:else}
	<div>
		<Navbar />
	</div>
{/if}

<!-- CONTENT -->
<div style="overflow: visible;">
	<slot />
</div>

<!--FOOTER-->
<Footer class="mt-10" />
