<script>
    import {goto} from "$app/navigation";

    let about = true;
</script>

<div class="mt-[15vh] mb-[15vh]">
    <div style="display: flex; justify-content: center; align-content: center; flex-direction: column;">
        <div class="flex-col flex-1 mx-10 justify-center">
            <div class="text-sm breadcrumbs">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>Committees</li>
                </ul>
            </div>
            <h1 class="font-bold text-5xl text-center mt-12">Committees</h1>
            <div class="mx-10">
                <div class="committee-grid">
                    <div class="committee-clickable" >
                        <a href="/committees/disec">
                            <img class="committee-pic" src="/disec_small.png" />
                        </a>
                        <h2>DISEC</h2>
                    </div>
                    <div class="committee-clickable">
                        <a href="/committees/sochum">
                            <img class="committee-pic" src="/sochum_small.png" />
                        </a>
                        <h2>SOCHUM</h2>
                    </div>
                    <div class="committee-clickable">
                        <a href="/committees/legal">
                            <img class="committee-pic" src="/legal_small.png"/>
                        </a>
                        <h2>LEGAL</h2>
                    </div>
                    <div class="committee-clickable">
                        <a href="/committees/security_council">
                            <img class="committee-pic" src="/WHO_small.png"/>
                        </a>
                        <h2>Security Council</h2>
                    </div>
                    <div class="committee-clickable">
                        <a href="/committees/international_criminal_court">
                            <img class="committee-pic" src="/WHO_small.png"/>
                        </a>
                        <h2>International Criminal Court</h2>
                    </div>
                    <div class="committee-clickable">
                        <a href="/committees/interpol">
                            <img class="committee-pic" src="/WHO_small.png"/>
                        </a>
                        <h2>INTERPOL</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
h2 {
    @apply font-black text-2xl text-center;
}

.committee-pic {
    @apply ml-auto mr-auto mb-5 scale-75;
}

.committee-grid {
    @apply grid grid-cols-3 gap-x-4 gap-y-16 mt-20;
}

@media (max-width: 1024px) {
    .committee-grid {
        @apply grid-cols-1;
    }
}

.committee-clickable {
    transition: all .2s ease-in-out;
}

@media (hover: hover), (-ms-high-contrast: none) {
    .committee-clickable:hover {
        transform: scale(1.1);
    }
}


.committee-clickable:active {
    transform: scale(.9);
}
</style>