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
                    <li>DISEC</li>
                </ul>
            </div>
            <div class="mt-12">
                <img style="width: 300px; height: 300px;" src="/DISEC.png" class="ml-auto mr-auto mb-5"/>
            </div>
            <h1 class="font-bold text-5xl text-center">DISEC</h1>
            <div class="mx-10 md:mx-[15vw]">
                <h2 class="text-2xl font-bold underline mt-32">Topic</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-center">Combating the Threat of Bio-Terrorism after the COVID-19 Pandemic</p>
                <h2 class="text-2xl font-bold underliner mt-32">Description</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The Disarmament and International Security Committee (DISEC) is the First Committee of the United Nations General Assembly. The committee concerns itself with questions of international importance regarding the security and demilitarization throughout all countries and regions, along with ensuring that citizens across the globe remain protected.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">This Vianu MUN’s edition DISEC topic is combating the Threat of Bio-Terrorism after the Covid-19 Pandemic. Bioterrorism is the deliberate use of biological agents (bacteria, viruses, fungi) to harm or just frighten the people. It is related to the military use of biological, chemical, and nuclear weapons.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">Attacks with biological agents are among the most dangerous and deceptive among the other forms of attacks aforementioned. Attacks could occur without being detected for a long time, potentially exposing a vast number of people, who are unaware of the threat.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The United Nations remains on the forefront of the fight against bio-terrorism, passing resolutions and calling on states to do more to ensure their citizens safety. We need you, esteemed delegates, to solve, once forever, this issue! Join this challenge by signing up for the DISEC committee!</p>
                <h2 class="mt-24 text-2xl font-bold underline">Chairpersons</h2>
                <div class="member-grid">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => showModal[0] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[30vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/alia_tanasoiu_disec.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Alia Tanasoiu
                            </p>
                        </div>
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => showModal[1] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[30vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/bianca_constantin_disec.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-2xl font-bold normal-case">
                                Bianca Constantin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal[0]}
    <ProfileModal name="Alia Tănăsoiu" image="/profile_pictures/chairpersons/alia_tanasoiu_disec.jpg" visible={showModal[0]} onClose="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Greetings, prospective delegates! </p><br/>
            <p>My name is Alia Tănăsoiu and it's my utmost pleasure to chair the DISEC committee for this edition of VianuMUN, alongside Bianca.</p><br/>
            <p>I'm a junior at "Saint Sava'' National College, a gender equality activist, and a cat person. Over the last couple of months, MUNs have become one of my greatest passions, and I truly believe that everyone who experiences these types of conferences falls in love with them. As a chairperson, I always make sure that besides the challenging environment of debating, delegates also enjoy the fun parts of these conferences. Looking forward to meeting you all in February!&lt;3</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[1]}
    <ProfileModal name="Bianca Constantin" image="/profile_pictures/chairpersons/bianca_constantin_disec.jpg" visible={showModal[1]} onClose="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello! My name is Bianca Constantin, I’m a Junior at “Gheorghe Lazar” National College and it is my profound pleasure to take part in chairing the DISEC committee at Vianu MUN 2023 alongside Alia!❤</p><br/>
            <p>Saying that I am passionate about MUNs is too less, considering the fact that lately, they craved my whole personality and mentality. This is why I am beyond grateful for the experiences that I had and the people that I met here - and now, I want to give back to this amazing community all those beautiful feelings with which I was enchanted!</p><br/>
            <p>Vianu MUN is one of the conferences closest to my heart since, at the last year’s edition, I discovered a committee that passionates me a lot (the International Court of Justice)! And now, at this edition, I have the opportunity to experience an interesting and intense committee: DISEC!</p><br/>
            <p>I candidly hope that my prospective delegates will have ’’the time of their lives’’ as I had myself last year since I will give a piece of my heart to this committee and to this conference in order to make it memorable for every single delegate! </p>
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
