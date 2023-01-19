<script>
    import ProfileModal from "../../../components/ProfileModal.svelte";
    import NewModal from "../../../components/NewModal.svelte";

    let showModal = [false, false]
</script>

<div class="mt-[15vh] mb-[15vh]">
    <div style="display: flex; justify-content: center; align-content: center; flex-direction: column;">
        <div class="flex-col flex-1 mx-10 justify-center">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/committees">Committees</a></li>
                    <li>LEGAL</li>
                </ul>
            </div>
            <div class="mt-12">
                <img style="width: 300px; height: 300px" src="/LEGAL.png" class="ml-auto mr-auto mb-5"/>
            </div>
            <h1 class="font-bold text-5xl text-center">LEGAL</h1>
            
            <div class="mx-10 md:mx-[15vw]">
                <h2 class="text-2xl font-bold underline mt-32">Topic</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-center">
                    Discussing the Legal and Moral Implications of Human Cloning
                </p>
                <h2 class="text-2xl font-bold underline mt-32">Description</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The Legal committee is the Sixth committee of the General Assembly of the United Nations. It deals primarily with legal matters and is the primary forum for the consideration of international law and other legal matters concerning the United Nations.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The United Nations General Assembly has a specific responsibility to foster the gradual development of public international law, according to Article 13 of the UN Charter, it shall work with “supporting the gradual development of international law and its codification." Following precedent, this provision has been understood as a broad authorization to draft new treaties on a wide range of topics, adopt them, and recommend them to governments for signature, ratification, and accession.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">While international law-making conversations take place in a variety of United Nations specialised bodies depending on their actual subject area, those connected to general international law are normally held at the Sixth Committee. The Legal Committee has universal membership, which means that all United Nations member states are de jure members of the Sixth Committee.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">Human Cloning is a complicated subject in our social climate, considering the different approaches around the globe of this issue and its moral and legal implications. During these 3 days of intense debate, you will need to use your skills to support your country’s views over the matter and reach a satisfying conclusion for all states involved. We are sure you will bring up strong arguments in regards to this delicate topic and we are eager to see the debate unfold!</p>
                <h2 class="mt-24 text-2xl font-bold underline">Chairpersons</h2>
                <div class="member-grid">
                    <div on:click={() => showModal[0] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[30vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/alexandra_tilinca_legal.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Alexandra Tilincă
                            </p>
                        </div>
                    </div>
                    <div on:click={() => showModal[1] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[30vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/clara_pistol_legal.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Clara Pistol
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal[0]}
    <NewModal name="Alexandra Tilincă" image="/profile_pictures/chairpersons/alexandra_tilinca_legal.jpg" visible={showModal[0]} on:close="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello, prospective delegates! My name is Alexandra, I’m a senior in high school and I cannot wait to chair the Legal Committee alongside Clara at this year’s edition of Vianu MUN!</p><br/>
            <p>Being part of last year’s edition, I knew I wanted to be part of the academic team, helping people fall in love with Vianu MUN just like I did. A few things about me: I’m a bookworm, I love psychology and I find international conflicts extremely interesting. </p><br/>
            <p>I can’t wait to meet you all!</p>
        </div>
    </NewModal>
{/if}

{#if showModal[1]}
    <NewModal name="Clara Pistol" image="/profile_pictures/chairpersons/clara_pistol_legal.jpg" visible={showModal[1]} on:close="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello there! My name is Clara, I am a junior at "Saint Sava" National College and I will be one of the chairs of the LEGAL Committee, alongside Alexandra🥰.</p><br/>
            <p>I am the type of person who doesn't like to sit still and in these MUN conferences I have found the perfect way to satisfy my need for "action", as well as meet an amazing assortment of brilliant people and expand my knowledge on various important topics.</p><br/>
            <p>Two years ago, when I was a freshman, VianuMUN was my first ever MUN conference; last year, I returned here again as a delegate, less afraid and more knowledgeable; this year, I am coming full circle, chairing the committee which started it all for me. Safe to say, I am beyond excited to be a part of this amazing conference and I am looking forward to meeting you all!🤍</p>
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
