<script>
    import {goto} from '$app/navigation.js'

	export let image;
	export let name;
	export let title;
    export let link;

</script>

<div
	id="card"
	class="card rounded-3xl bg-base-100
    betterhover:shadow-xl
    w-[80vw] sm:w-[80vw] md:w-[30vw] lg:w-[20vw]
    justify-center content-center shadow-lg"
	style="transition: all .2s ease-in-out;"
    on:click={() => goto(link)}
>
	<figure class="px-10 pt-10 justify-center content-center" style="display: flex;">
		<img class="mask mask-circle" style="width: auto; height: 150px;" src={image} alt="" />
	</figure>
	<div class="card-body justify-center content-center text-center" style="display: flex;">
		<p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">{name}</p>
		<p class="text-sm sm:text-base md:text-md lg:text-lg normal-case">{title}</p>
	</div>
</div>

<style>
	@media (hover: hover), (-ms-high-contrast: none) {
		#card:hover {
			transform: scale(1.1);
		}
	}
</style>
