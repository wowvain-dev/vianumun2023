<script>
    import Modal from './Modal.svelte';
    import MediaQuery from './MediaQuery.svelte';
    import { fade } from 'svelte/transition';

    export let image;
    export let name;
    export let visible = false;
    export let onClose = () => { visible = false };
</script>

{#if visible}
<div transition:fade>
    <Modal on:close={onClose}>
        <MediaQuery query="(max-width: 1350px)" let:matches>
            {#if matches}
                    <div>
                        <h1 class="text-center mt-24">{name}</h1>
                        <span class="divider uppercase text-md text-center mt-0"></span>
                        <div class="ml-4 mr-4 mb-4">
                            <slot class="text-2xl"/>
                        </div>
                    </div>
            {:else}
                <div class="flex">
                    <div>
                        <img src="{image}" alt="" class="h-full rounded-bl-2xl rounded-tl-2xl">
                    </div>
                    <div class="ml-4 mr-4 mb-4">
                        <h1>{name}</h1>
                        <span class="divider uppercase text-md text-center mt-0"></span>
                        <slot />
                    </div>
                </div>
            {/if}
        </MediaQuery>
    </Modal>
</div>
{/if}

<style>
h1 {
    @apply text-2xl font-bold mt-[1%];
}
</style>