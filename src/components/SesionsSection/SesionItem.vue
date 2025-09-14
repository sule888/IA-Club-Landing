<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps({
    sesion: { type: Object, required: true },
    type: { type: String, default: "futura" },
});

const abierto = ref(false);
const esPasada = computed(() => props.type === "pasada");
const desplegar = () => (abierto.value = !abierto.value);
</script>

<template>
    <div class="sesion-item">
        <div class="row">
            <div class="title">
                <span class="normal-text text-main-color"> {{ sesion.numero }}</span>
                <h4 class="normal-text-bold">{{ sesion.titulo }}</h4>
            </div>
            <time class="fecha">{{ sesion.fecha }}</time>
        </div>

        <p v-if="sesion.lugar" class="lugar">
            <span class="normal-text-bold">Lugar:</span>
        <p class="normal-text"> {{ sesion.lugar }}</p>
        </p>

        <button v-if="esPasada && sesion.temasCentrales?.length" class="transparent-btn cont-btn" @click="desplegar">
            <p class="normal-text text-sec-color">Temas centrales</p>
            <span class="chev" :class="{ 'chev-open': abierto }">
                <Icon icon="lucide:chevron-right" />
            </span>
        </button>

        <ul v-if="sesion.temasCentrales?.length" class="sesion-ul normal-text" v-show="esPasada ? abierto : true">
            <li v-for="(t, j) in sesion.temasCentrales" :key="j">{{ t }}</li>
        </ul>
    </div>
</template>

<style scoped>
.sesion-item {
    background: transparent;
    padding: 12px 8px;
    border-bottom: 1px solid rgba(0, 0, 0, .06);
}

.row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
}

.title {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
}

.titulo {
    margin: 0;
    font-size: 16px;
    font-weight: 800;
    color: #111827;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.badge {
    color: var(--main-color);
    font-weight: 800;
}

.fecha {
    font-size: 14px;
    color: #667085;
}

.lugar {
    display: flex;
    gap: 8px;
    color: #374151;
}



.cont-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.sesion-ul {
    margin: 8px 0 0 24px;
}

.btn-accordion {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: #f6f7f9;
    border: 1px solid rgba(0, 0, 0, .06);
    color: #111827;
    font-weight: 700;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
}

.btn-accordion:hover {
    background: #eef1f3;
    box-shadow: 0 0 0 3px rgba(0, 99, 177, .10);
}

.chev {
    display: inline-block;
    color: var(--main-color);
    font-weight: 900;
    transition: transform .16s ease;
}

.chev-open {
    transform: rotate(90deg);
}

.sesion-item--futura .titulo {
    color: var(--main-color);
}

.sesion-item--futura .badge {
    background: rgba(0, 99, 177, .08);
    border-radius: 999px;
    padding: 2px 8px;
}

.sesion-item--pasada .titulo {
    color: #1f2937;
    opacity: .95;
}

.sesion-item--pasada .badge {
    color: var(--sec-color);
}
</style>
