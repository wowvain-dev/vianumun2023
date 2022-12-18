<script>
    import ProfileModal from "../../../components/ProfileModal.svelte";

    let showModal = [false, false, false];
</script>

<div class="mt-[15vh] mb-[15vh]">
    <div style="display: flex; justify-content: center; align-content: center; flex-direction: column;">
        <div class="flex-col flex-1 mx-10 justify-center">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/committees">Committees</a></li>
                    <li>SOCHUM</li>
                </ul>
            </div>
            <div class="mt-12">
                <img style="width: 300px; height: 300px;" src="/SOCHUM.png" class="ml-auto mr-auto mb-5"/>
            </div>
            <h1 class="font-bold text-5xl text-center">SOCHUM</h1>
            <div class="mx-10 md:mx-[15vw]">
                <h2 class="text-2xl font-bold underline mt-32">Topic</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-center">Discussing the Ethics of the Recent Feminist Waves</p>
                <h2 class="text-2xl font-bold underliner mt-32">Description</h2>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The Third Committee of the General Assembly, also known as the Social, Humanitarian & Cultural Committee or SOCHUM, focuses on issues dealing with fundamental human rights and operates with the goal of designing peaceful settlements for issues within the large spectrum of social, humanitarian, and cultural complications in the international community.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">As the first two feminist waves had clear and quantifiable objectives that mainly targeted legislative changes, there were also issues within the movement, seeing that their institutional victories weren’t available for all women. Because of this, the third wave of feminism represented a new ideal that was based on more complex principles, such as intersectionality, criticizing ,,white feminism” and its history of segregating other people affected by patriarchy from the mainstream movement.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">The third-wave feminist’s self-expression differed, protesting loudly against the patriarchy and reclaiming their sexuality. The fourth wave isn’t so much of a shift as the continued growth of the third wave, surrounding the MeToo movement and a resurgence of attacks on women’s rights. The last two feminist waves bewildered people that initially supported the movement, considering it radical and arguing that it is clashing with many principles of early feminism, especially with the idea of resisting traditional femininity. As with every wave before them, the third and fourth waves are complex, encompassing many movements that both complement and clash with each other.</p>
                <p class="mt-10 text-lg ml-auto mr-auto text-justify">If you're interested in debating this highly controversial topic while having a true learning experience, join the SOCHUM Committee!</p>
                <h2 class="mt-24 text-2xl font-bold underline">Chairpersons</h2>
                <div class="member-grid">
                    <div on:click={() => {showModal[0] = true;}} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/ioana_carciumaru_sochum.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-xl font-bold normal-case">
                                Ioana Cârciumaru
                            </p>
                        </div>
                    </div>
                    <div on:click={() => showModal[1] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/eduard_busuioc_sochum.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-xl font-bold normal-case">
                                Eduard Busuioc
                            </p>
                        </div>
                    </div>
                    <div on:click={() => showModal[2] = true} class="card rounded-3xl bg-base-100 betterhover:shadow-xl
                        w-[20vw]
                    ">
                        <figure class="px-10 pt-10 justify-center content-center" style="display: flex">
                            <img class="mask mask-circle" style="width: auto; height: 150px;"
                                 src="/profile_pictures/chairpersons/ioana_stoicescu_sochum.jpg" alt=""/>
                        </figure>
                        <div class="card-body justify-center content-center text-center" style="display:flex;">
                            <p class="text-base sm:text-md md:text-lg lg:text-xl font-bold normal-case">
                                Ioana Stoicescu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{#if showModal[0]}
    <ProfileModal name="Ioana Cârciumaru" image="/profile_pictures/chairpersons/ioana_carciumaru_sochum.jpg" visible={showModal[0]} onClose="{() => showModal[0] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello! Im Ioana, also known as Joy, and I couldn't be more excited to chair the SOCHUM committee at this year's edition of VianuMUN alongside Edi and Ioana! I am currently a sophmore at "Jean Monnet" highschool in Bucharest, and ever since I was a freshman I have made MUNs and public speaking of all kinds my main hobby.</p>
            <br/><p>While I'm always searching for new ways to make debating more fun, I am serious and focused when needed, never letting my competitive side stay hidden for too long.</p>
            <br/><p>I hope I will be able to be a comforting presence during these few days of debate as I will do my best to guide you, the delegates, through this topic that has been a special interest of mine for quite some time now. I am looking forward to meeting you all!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[1]}
    <ProfileModal name="Eduard Busuioc" image="/profile_pictures/chairpersons/eduard_busuioc_sochum.jpg" visible={showModal[1]} onClose="{() => showModal[1] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hello! My name is Edi, and I'll be chairing the SOCHUM committee of this edition of VianuMUN, alongside Joy and Ioana!</p><br/>
            <p>I am currently a junior at the "Mihai Eminescu" National College in Bucharest. My passions include public speaking, politics, reading and history. Furthermore, with the topic we have chosen, I am looking for delegates to get a deeper dive into the history of the feminist waves, acknowledging the importance that these hold on our modern societies.</p><br/>
            <p>Having stated all of that, I simply cannot wait to see you all at the conference!</p>
        </div>
    </ProfileModal>
{/if}

{#if showModal[2]}
    <ProfileModal name="Ioana Stoicescu" image="/profile_pictures/chairpersons/ioana_stoicescu_sochum.jpg" visible={showModal[2]} onClose="{() => showModal[2] = false}">
        <div class="description indent-[5%] text-lg" style="display:flex; flex-direction: column; overflow: hidden;">
            <p>Hi! I’m Ioana, a senior at ,,Cantemir-Vodă” National College in Bucharest and I am beyond delighted to chair the SOCHUM committee alongside Edi and Ioana, the sweetest co-chairs I could have hoped for, on a topic that has served as the perfect conversation opener throughout all of my high-school years. </p><br/>
            <p>The thing I’m most captivated by is literature, going back to the same gut-wrenching comfort novels over and over again, aside from having many other areas of interest - predominantly law. </p><br/>
            <p>I tend to be a perfectionist, having a detail-oriented perspective on all things, but I consider that making the committee a comfortable place takes precedence over this aspect. Thus, I hope to be a calm and assuring presence and I can’t wait to see you all. &lt;3 </p>
        </div>
    </ProfileModal>
{/if}

<style>
    .description p {
        overflow: auto;
    }

    .card {
        transition: all .2s ease-in-out;
    }

    .member-grid {
        @apply grid grid-cols-3 gap-y-16 mt-10;
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
