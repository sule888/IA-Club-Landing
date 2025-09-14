<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import SesionsForm from "../AddInfoFormView/components/SesionsForm.vue";
const desplegableActivo = ref(null);

function desplegar(seccion) {
    if (desplegableActivo.value === seccion) {
        desplegableActivo.value = null;
    } else {
        desplegableActivo.value = seccion;
    }
}
</script>

<template>
    <div class="margin">
        <header class="header">
            <h1 class="titles">Bienvenida Sulem</h1>
            <router-link to="/" class="link">
                Regresar
            </router-link>
        </header>

        <!-- ! iterar -->
        <section class="section">
            <button class="transparent-btn section-header" @click="desplegar('sesiones')">
                <h2 class="subtitles text-sec-color">Sesiones</h2>
                <Icon icon="lucide:chevron-right" class="chev"
                    :class="{ 'chev-open': desplegableActivo === 'sesiones' }" />
            </button>
            <SesionsForm v-show="desplegableActivo === 'sesiones'" />
        </section>

        <section class="section">
            <button class="transparent-btn section-header" @click="desplegar('miembros')">
                <h2 class="subtitles text-sec-color">Miembros</h2>
                <Icon icon="lucide:chevron-right" class="chev"
                    :class="{ 'chev-open': desplegableActivo === 'miembros' }" />
            </button>
            <!-- <SesionsForm v-show="desplegableActivo === 'miembros'" />  -->
        </section>

        <section class="section">
            <button class="transparent-btn section-header" @click="desplegar('instituciones')">
                <h2 class="subtitles text-sec-color">Instituciones</h2>
                <Icon icon="lucide:chevron-right" class="chev"
                    :class="{ 'chev-open': desplegableActivo === 'instituciones' }" />
            </button>
            <!-- <SesionsForm v-show="desplegableActivo === 'instituciones'" /> -->
        </section>
        <section class="section">
            <button class="transparent-btn section-header" @click="desplegar('proyectos')">
                <h2 class="subtitles text-sec-color">Proyectos</h2>
                <Icon icon="lucide:chevron-right" class="chev"
                    :class="{ 'chev-open': desplegableActivo === 'proyectos' }" />
            </button>
            <!-- <SesionsForm v-show="desplegableActivo === 'proyectos'" /> -->
        </section>

    </div>

</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    margin-top: 100px;
    justify-content: space-between;

}

.section {
    margin-top: 24px;
}


.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.section-header h2 {
    margin: 0;
}

.chev {
    font-size: 28px;
    color: var(--main-color);
    transition: transform 160ms ease;
}

.chev-open {
    transform: rotate(90deg);
}
</style>
