<script>
    import {fade} from "svelte/transition";
    let about = true;
</script>

<div class="mt-[15vh] mb-[15vh]">
    <div style="display: flex; justify-content: center; align-content: center; flex-direction: column;">
<!--    TODO(wowvain-dev):    fix side buttons-->
        <div class="flex-col flex-1  mx-5 sm:mx-10  md:mx-30 lg:mx-40 justify-center">
            {#if about === true}
                <div in:fade|local>
                    <h1 class="font-bold text-5xl text-center">About us</h1>
                    <div class="mx-5 md:mx-10 lg:mx-32 xl:mx-48">
                        <p class="mt-24">
                            The first edition of VianuMUN took place in May 2019, bringing an innovation to the MUN world: the INTERPOL committee.
                            Ever since then, our purpose has been to bring people together and to help them create unforgettable memories while taking part in our conference.
                        </p>
                        <br/>
                        <p>
                            In the previous editions, VianuMUN has had an astounding amount of success.
                            This, alongside with the passion the team’s members have for MUNs,
                            is what made VianuMUN thrive towards becoming better and better with each edition.
                        </p>
                        <br/>
                        <p>
                            This year, the team has worked harder than ever. All of them put together their skills,
                            their passion and their dedication in order to offer each participant everything they could ask for in an MUN conference,
                            looking both at the organizing part and at the academic part.
                        </p>
                        <br/>
                        <p>
                            Our mission is to help each and every single person taking part in this conference evolve and enrich their knowledge and culture, in a prosper environment.
                            More importantly, we want this to make a difference in the MUN community,
                            helping people acknowledge the importance of speaking up and of being well informed about your surroundings.
                        </p>
                        <br/>
                        <br/>
                        <p>
                            <i>The Deputy Secretary General of VianuMUN</i>,
                            <br/><i>Mara Andronache</i>
                        </p>
                    </div>
                </div>
            {:else}
                <div in:fade|local>
                    <h1 class="font-bold text-5xl text-center">Past topics</h1>
                    <div class="mx-5 md:mx-10 lg:mx-32 xl:mx-48">
                        <h2 class="mt-24 text-lg font-bold underline">VianuMUN 2021</h2>
                        <br/>
                        <p><b>International Court of Justice:</b> Questions relating to the Obligation to Prosecute or Extradite (Belgium vs Senegal)</p>
                        <p class="mt-1"><b>ECOFIN:</b> The Energy Crisis and its Possible Solutions</p>
                        <p class="mt-1"><b>SOCHUM:</b> Curbing the Use of Gender Stereotypes in Social Media Marketing Strategies</p>
                        <p class="mt-1"><b>INTERPOL:</b> Maritime Piracy and Armed Robbery against Ships</p>
                        <p class="mt-1"><b>HSC:</b> The Buddhist Crisis</p>

                        <h2 class="mt-12 text-lg font-bold underline">VianuMUN 2020</h2>
                        <br/>
                        <p><b>UNHCR:</b></p>
                        <ol class="list-decimal pl-10">
                            <li><p>Improving Access to Education for Refugees</p></li>
                            <li><p>Supporting the Economic Inclusion of Refugees</p></li>
                        </ol>
                        <p class="mt-1"><b>ECOSOC:</b></p>
                        <ol class="list-decimal pl-10">
                            <li><p>Rethinking the Global Food Economy towards Sustainable Food Production and Distribution</p></li>
                            <li><p>Evolution of Artificial Intelligence: Its Impact on humankind</p></li>
                        </ol>
                        <p class="mt-1"><b>UNDRR:</b> Climate Change Risk Assessment</p>
                        <p class="mt-1"><b>SPECPOL:</b></p>
                        <ol class="list-decimal pl-10">
                            <li><p>Federalization of the Republic of Moldova</p></li>
                            <li><p>Avoiding the Reescalation of "The Troubles" Conflict</p></li>
                        </ol>
                        <p class="mt-1"><b>LEGAL:</b></p>
                        <ol class="list-decimal pl-10">
                            <li><p>The Question of Veto: Avoiding the Abuse of Power</p></li>
                            <li><p>The Principle of Self-Determination of States</p></li>
                        </ol>
                        <p class="mt-1"><b>INTERPOL:</b></p>
                        <ol class="list-decimal pl-10">
                            <li><p>Combating modern Counterfeiting Technologies and Identity Theft</p></li>
                            <li><p>Crisis</p></li>
                        </ol>
                        <p class="mt-1"><b>UNSC:</b> Yugoslavia: Inner Collapse or Further Thrive</p>
                        <p class="mt-1"><b>INTERPOL:</b> Maritime Piracy and Armed Robbery against Ships</p>
                        <p class="mt-1"><b>HSC:</b> 1963 - The Buddhist Crisis</p>

                        <h2 class="mt-24 text-lg font-bold underline">VianuMUN 2019</h2>
                        <br/>
                        <p><b>SOCHUM:</b> Denmark's Ban on Garment that Hides the Face in Public - A Fight Against Islam?</p>
                        <p class="mt-1"><b>ECOFIN:</b> Universal Basic Income - Benefit or Burden?</p>
                        <p class="mt-1"><b>INTERPOL:</b> The Panama Papers: Improving Multilateral Cooperation to Combat Tax Evasion</p>
                        <p class="mt-1"><b>UNSC:</b> The Rise of Vigilantism</p>
                        <p class="mt-1"><b>International Court of Justice:</b> Croatia vs Serbia - Genocide Case (1999 - 2015)</p>
                    </div>
                </div>
            {/if}
            <div
                    class="divider mt-10 mx-[15%] fill-neutral justify-center content-center
						 before:bg-secondary after:bg-secondary
						 w-[70%]"
            />
            <div class="text-center mx-5 content-center">
                <span class="text-sm sm:text-md md:text-lg lg:text-xl uppercase text-center
                mr-5 md:mr-14 lg:mr-20">About us</span>
                <input type="radio" name="radio-1" class="radio" bind:group={about} value={true}/>
                <input type="radio" name="radio-1" class="radio" bind:group={about} value={false}/>
                <span class="text-sm sm:text-md md:text-lg lg:text-xl uppercase text-center
                ml-5 md:ml-14 lg:ml-20">Past topics</span>
            </div>
        </div>
    </div>
</div>

<style>

</style>