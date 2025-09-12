<script setup>
import { Brain, Bot, Atom, FlaskConical, Database, Code } from 'lucide-vue-next'
import Ia from "../../assets/img/png/ia-hover.jpg"
import Llms from "../../assets/img/png/llms-hover.jpg"
import Ml from "../../assets/img/png/ml-hover.jpg"
import CD from "../../assets/img/png/ciencia-datos-hover.jpg"
import DevWeb from "../../assets/img/png/web-dev-hover.jpg"
import IApp from "../../assets/img/png/investigacion-ap-hover.jpg"
import SecondCard from '../GeneralComponents/SecondCard.vue'
const areas = [
    { label: 'Inteligencia Artificial', icon: Brain, img: Ia },
    { label: 'Large Language Models', icon: Bot, img: Llms },
    { label: 'Machine Learning', icon: Atom, img: Ml },
    { label: 'Ciencia de Datos', icon: Database, img: CD },
    { label: 'Desarrollo Web', icon: Code, img: DevWeb },
    { label: 'Investigacion Aplicada', icon: FlaskConical, img: IApp },
]
</script>

<template>
    <section class="areas">
        <h2 class="subtitles text-sec-color">Areas de investigacion</h2>
        <div class="grid">
            <SecondCard v-for="(area, index) in areas" :key="index" :icon="area.icon" :title="area.label"
                :img="area.img" />
        </div>
    </section>
</template>

<style scoped>
.areas {
    width: 100%;
    margin: 40px auto 0;
}

.grid {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
}

@media (max-width: 1000px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 8px;
    }
}
</style>
