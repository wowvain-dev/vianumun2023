<script>
    import ProfileModal from "../../../components/ProfileModal.svelte";
    import NewModal from "../../../components/NewModal.svelte";

    let showModal = [false, false];
</script>

<div class="mt-[15vh] mb-[15vh]">
    <div style="display: flex; justify-content: center; align-content: center; flex-direction: column;">
        <div class="flex-col flex-1 mx-10 justify-center">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/committees">Committees</a></li>
                    <li>INTERPOL</li>
                </ul>
            </div>
            <div class="mt-12">
                <img style="width: 300px; height: 300px;" src="/INTERPOL.png" class="ml-auto mr-auto mb-5"/>
            </div>
            <h1 class="font-bold text-5xl text-center">INTERPOL</h1>
            <div class="mx-10 md:mx-[15vw]">
                <h2 class="text-2xl font-bold underline mt-32">Topic</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-center">Counterfeit Currency and Security Documents</p>
                <h2 class="text-2xl font-bold underline mt-32">Description</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">Join the INTERPOL Committee for an overwhelmingly interactive experience, connecting the police webs on an international level, and tracking down world wide operations, with unique solutions and unexpected outcomes!</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">Fake currency undermines economies while fraudulent identity documents give criminals freedom of movement, however tracking down the illegal factions, that are falsifying these, often proves even harder. </p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">Counterfeiting has been considered a crime dating back to antiquity. Today, the scope is wider, the impact greater, the tools more readily available and the techniques increasingly sophisticated. If left unchecked, the circulation of counterfeit currency can undermine national economies, weaken financial institutions and jeopardize people’s livelihoods.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">It fuels the underground economy and finances the activities of organized criminal networks and terrorists.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The fraudulent use of identity and travel documents – whether they are counterfeit, forged or simply unofficial – is a major threat to both individuals and society as a whole. Recent developments in photographic, computer and printing technologies, along with the availability of low-cost equipment, have made forgery much easier.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">Can you unfold the mysteries that hide in the shadows, sneaking right under the police’s noses?</p>
                <h2 class="mt-24 text-2xl font-bold underline">Chairpersons</h2>
                <div class="member-grid">
                    <div on:click={() => {showModal[0] = true;}} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[30vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/bogdan_raicu_interpol.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Bogdan Raicu
                            </p>
                        </div>
                    </div>
                    <div on:click={() => {showModal[1] = true;}} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[30vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/ana_aronescu-pga.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Ana Aronescu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal[0]}
    <NewModal name="Bogdan Raicu" image="/profile_pictures/chairpersons/bogdan_raicu_interpol.jpg" visible={showModal[0]} on:close="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello there! I’m Bogdan, a senior at the National College of Iasi and I have the utmost pleasure to chair the INTERPOL committee alongside Ana Aronescu for this year’s edition of VianuMUN.</p><br/>
            <p>A few things you need to know about me before the conference are that I never back down from anything and above all, the phrase “why not” defines me the best. I do all sorts of stuff, from playing the guitar to piloting, and mountain biking, and have rarely been able to stick to one thing in my life, that is until I started debating.</p><br/>
            <p>I find myself still a beginner of sorts and believe I have tons to learn. Be it in the chairing position or the delegate one I will never stop looking for ways to improve myself and as such, I have high hopes for this committee and our evolution through it.</p><br/>
            <p>With all this being said, I am eager to see all of you joining VianuMUN, and hopefully, the INTERPOL committee.</p>
        </div>
    </NewModal>
{/if}

{#if showModal[1]}
    <NewModal name="Ana Aronescu" image="/profile_pictures/ana_aronescu-pga.jpg" visible={showModal[1]} on:close="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hi, my name is Ana, but I’m known as Cat. I am 20 years old, I just finished my senior year of high school, I am a freshman at the Faculty of Philosophy in Bucharest, but more importantly I’m ecstatic to be one of the chairpersons of the INTERPOL Committee, alongside Bogdan, for VianuMUN 2023.</p><br/>
            <p>Bubbly and passionate, I have always been a fan of public speaking, with sugar, spice and everything nice. I will try to drag everyone I can to join my hobbies, interests, and more, and MUN’s, just so happen to be high on that list, alongside literature, musical theatre, DnD, and biology. A rocker with a deep love for pop culture, I will probably try to gracefully insert jokes whenever possible, to lighten the mood, like a true Lawful Evil.</p><br/>
            <p>~ Kisses. ♥</p>
        </div>
    </NewModal>
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
