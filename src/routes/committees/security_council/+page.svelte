<script>
    import ProfileModal from "../../../components/ProfileModal.svelte";

    let showModal = [false, false];
</script>

<div class="mt-[15vh] mb-[15vh]">
    <div style="display: flex; justify-content: center; align-content: center; flex-direction: column;">
        <div class="flex-col flex-1 mx-10 justify-center">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/committees">Committees</a></li>
                    <li>Security Council</li>
                </ul>
            </div>
            <div class="mt-12">
                <img src="/WHO_small.png" class="ml-auto mr-auto mb-5"/>
            </div>
            <h1 class="font-bold text-5xl text-center">Security Council</h1>
            <div class="mx-10 md:mx-[25vw]">
                <h2 class="text-2xl font-bold underline mt-32">Topic</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-center">Addressing the Ongoing Syrian Civil War</p>
                <h2 class="mt-24 text-2xl font-bold underline">Chairpersons</h2>
                <div class="member-grid">
                    <div on:click={() => showModal[0] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/vlad_iliescu_sc.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Vlad Iliescu
                            </p>
                        </div>
                    </div>
                    <div on:click={() => showModal[1] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/cristian_alexuc_sc.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Cristian Alexuc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal[0]}
    <ProfileModal name="Vlad Iliescu" image="/profile_pictures/chairpersons/vlad_iliescu_sc.jpg" visible={showModal[0]} onClose="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hey everyone! My name is Vlad, I’m 18 and I’m a senior at IBSB. I am passionate about history, international relations and music, especially playing guitar. </p><br/>
            <p>I am thrilled to be a chair of the Security Council, a committee which holds a special place in my heart, especially along with an amazing person like Cris beside me.</p><br/>
            <p>I look forward to the amazing debates that will be happening at the conference and I hope to find you all there in good spirits!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[1]}
    <ProfileModal name="Cristian Alexuc" image="/profile_pictures/chairpersons/cristian_alexuc_sc.jpg" visible={showModal[1]} onClose="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello!! My name is Cris, I'm a huge MUN enthusiast and I am really exicted to be able to chair alongside my dear friend Vlad! </p><br/>
            <p>My personality type is ENTP and I love to fight and argue with people. Really passionate about classical writers, you can always find me talking about Albert Camus, Deleuze, Sartre and Dostoevsky.</p><br/>
            <p>I love making the most out of any situation and I am sure we will make you want to stick around the MUN community. It will be a committee you can NOT miss, so join me and Vlad, and resolve international issues in the Security Council!</p>
        </div>
    </ProfileModal>
{/if}

<style>
    .card {
        transition: all .2s ease-in-out;
    }

    .member-grid {
        @apply grid grid-cols-2 gap-y-16 mt-10;
    }

    @media (max-width: 1150px) {
        .member-grid {
            @apply grid-cols-1;
        }

        .card {
            width: auto;
        }
    }

    @media (hover: hover), (-ms-high-contrast: none) {
        .card:hover {
            transform: scale(1.1);
        }
    }

    .card:active {
        transform: scale(.9);
    }
</style>
