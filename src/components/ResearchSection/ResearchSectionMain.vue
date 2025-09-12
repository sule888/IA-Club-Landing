<script setup>
import ResearchAreasGrid from './ResearchAreasGrid.vue'
import ClubDynamicsPanel from './ClubDynamicsPanel.vue'
import TitleEfect from '../GeneralComponents/TitleEfect.vue';
</script>

<template>
    <section class="wrap" id="research">
        <header class="head">
            <TitleEfect title="Investigacion" />
            <p class="normal-text" style="margin-top:8px">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt maxime blanditiis voluptate nam maiores commodi, porro dolore numquam nulla, facere eum.</p>
        </header>
        <div class="cols">
            <ResearchAreasGrid />
            <ClubDynamicsPanel />
        </div>
    </section>
</template>

<style scoped>
.wrap {
    width: 100%;
}


.cols {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    align-items: start; */
    display: flex;
    flex-direction: column;
    gap: 64px;
}
</style>
