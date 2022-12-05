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
                    <li>International Criminal Court</li>
                </ul>
            </div>
            <div class="mt-12">
                <img src="/WHO_small.png" class="ml-auto mr-auto mb-5"/>
            </div>
            <h1 class="font-bold text-5xl text-center">International Criminal Court</h1>
            <div class="mx-10 md:mx-[25vw]">
                <h2 class="text-2xl font-bold underline mt-32">Topic</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-center">The Prosecutor v. Saif Al-Islam Gaddafi</p>
                <h2 class="mt-24 text-2xl font-bold underline">Chairpersons</h2>
                <div class="member-grid">
                    <div on:click={() => showModal[0] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/daria_dana_icc.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Daria Dana
                            </p>
                        </div>
                    </div>
                    <div on:click={() => showModal[1] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/lucian_cismaru-dpga.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Lucian Cismaru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal[0]}
    <ProfileModal name="Daria Dana" image="/profile_pictures/chairpersons/daria_dana_icc.jpg" visible={showModal[0]} onClose="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p> Hi, everyone! I’m Daria and I am beyond grateful to be a chairperson at Vianu MUN, in the committee that I fell in love with, the ICC. I’ve always been into law, debate, and international relations, so the ICC was the best place for me to discover my passions and interests in depth.</p><br/>
            <p>As a lover of challenges and new experiences, I have way too many hobbies during my free time: from MUN-ing, reading and volunteering, to traveling, learning foreign languages, or acting. You could say I love being busy, so I can never get bored. :)</p><br/>
            <p>I wish I could write more, but I know I am supposed to keep this short. So, I’ll end by saying that I cannot wait to see what a fruitful and fun debate we will have!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[1]}
    <ProfileModal name="Lucian Cismaru" image="/profile_pictures/lucian_cismaru-dpga.jpg" visible={showModal[1]} onClose="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hi! My name is Lucian and I will be one of the chairpersons of the ICC committee at Vianu MUN 2023. </p><br/>
            <p>I am a junior at „Grigore Moisil” National High school and I really enjoy psychology and history. I am deeply in love with Court-type committees, and I like to fashion myself as an „ICJ enthusiast”. Of course, I also really like the ICC, and that’s why I am here today, ready to be your chairperson and guide in this amazing committee. </p><br/>
            <p>I want to pursue a career in law (kinda obvious, I know), and I hope that you, future delegates, will come to enjoy legal debates and proceedings just as much as I do. See you in February!</p>
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
