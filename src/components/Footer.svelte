<script>
	import VianuLogo from './VianuLogo.svelte';
	import MediaQuery from './MediaQuery.svelte';
</script>

<footer class="footer flex py-5 px-2 bg-accent text-neutral-content justify-center content-center
				mt-auto">
	<div
		class="scale-anim"
		style="display: flex; flex-direction: column; justify-content: center; align-content: center;"
	>
		<a
			class="btn btn-ghost hover:bg-transparent  py-20
					sm:h-[100px] sm:w-[250px]
					md:h-[100px] md:w-[250px]
					h-[125px] w-[312.5px]
					content-center justify-center"
			href="http://portal.lbi.ro"
		>
			<VianuLogo color="#548278" />
		</a>
	</div>
	<div class="flex-1" />
	<div
		style="display: flex; flex-direction: column; justify-content: center; align-content: center;"
	>
		<div class="flex h-full justify-center content-center">
			<span
				class="-rotate-180 text-neutral text-center text-xl
						 tracking-wider"
				style="writing-mode: vertical-rl">CONTACT</span
			>
			<div
				class="divider divider-horizontal fill-neutral
						 before:bg-secondary after:bg-secondary
						 mx-2 w-2 h-[9.5rem]"
			/>
			<div class="btn-group btn-group-vertical">
				<a
					class="btn btn-ghost hover:bg-transparent  flex w-[50%]"
					href="https://instagram.com/vianumun"
				>
					<i class="fa fa-instagram text-lg md:text-xl lg:text-2xl w-5 mr-1 text-neutral flex-1" />
					<MediaQuery query="(min-width:768px)" let:matches>
						{#if matches}
							<span
								class="scale-anim h-10
						text-sm
						py-3.5 flex-initial w-[50%] ml-8 text-center text-neutral">Instagram</span
							>
						{/if}
					</MediaQuery>
				</a>
				<a
					class="btn btn-ghost hover:bg-transparent  flex w-[50%]"
					href="https://www.facebook.com/vianumodelunitednations"
				>
					<i
						class="fa fa-facebook text-lg md:text-xl lg:text-2xl w-5 mr-1 text-neutral flex-initial"
					/>
					<MediaQuery query="(min-width:768px)" let:matches>
						{#if matches}
							<span class="scale-anim h-10 py-3.5 flex-initial w-[50%] ml-9 text-neutral"
								>Facebook</span
							>
						{/if}
					</MediaQuery>
				</a>
				<label class="btn btn-ghost hover:bg-transparent flex w-[50%]" for="gmail-modal">
					<i class="fa fa-google text-lg md:text-xl lg:text-2xl w-5 mr-1 text-neutral flex-initial" />
					<MediaQuery query="(min-width:768px)" let:matches>
						{#if matches}
							<span class="scale-anim h-10 py-3.5 flex-initial w-[50%] ml-8 text-neutral"
								>vianumun.contact@gmail.com</span
							>
						{/if}
					</MediaQuery>
				</label>
			</div>
		</div>
	</div>
</footer>

<input type="checkbox" id="gmail-modal" class="modal-toggle" />
<label class="modal cursor-pointer" for="gmail-modal">
	<div class="modal-box rounded-lg relative">
		<label
			for="gmail-modal"
			class="btn btn-sm btn-square rounded-bl-sm rounded-br-sm rounded-tl-sm absolute right-0 top-0
                text-base-200"><i class="fa fa-close" /></label
		>
		<h1 class="text-2xl font-bold mb-10">Email us!</h1>
		<div class="mb-5">
			<span class="text-lg font-medium">Write to us in browser: </span>
			<div class="tooltip text-neutral tooltip-warning" data-tip="Might not work on mobile">
				<a
					class="btn btn-outline hover:bg-secondary ml-5"
					href="https://mail.google.com/mail/?view=cm&fs=1&to=vianumun.contact@gmail.com"
				>
					New Gmail Message
				</a>
			</div>
		</div>
		<div>
			<span class="text-lg font-medium">or in your local e-mail client: </span>
			<a class="btn btn-outline hover:bg-secondary ml-5" href="mailto:vianumun.contact@gmail.com">
				New Message
			</a>
		</div>
	</div>
</label>

<style>
	.scale-anim {
		transform: scale(1);
		transition: all 0.2s ease-in-out;
	}
	.scale-anim:hover {
		transform: scale(1.1);
		transition: all 0.2s ease-in-out;
	}
</style>
