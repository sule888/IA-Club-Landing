<script setup>
import Sesions from '../SesionsSection/Sesions.vue';

import {
    CalendarDays,
    Handshake,
    Spotlight,
    UserCog,
    MicVocal,
    Microscope,
    Users,
    Rocket,
    Speech,

    BriefcaseBusiness,
} from "lucide-vue-next";
import { Icon } from "@iconify/vue";
import MainButton from "../GeneralComponents/MainButton.vue";
const bullets = [
    {
        icon: Rocket,
        text: "Incubación de proyectos comerciales desde la idea hasta el lanzamiento.",
    },
    {
        icon: Microscope,
        text: "Equipos de investigación interdisciplinarios para resolver retos tecnológicos y científicos.",
    },
    {
        icon: Handshake,
        text: "Recepción y evaluación de ideas innovadoras en proyectos e investigación.",
    },
    {
        icon: Speech,
        text: "Asesoría y retroalimentación de expertos en áreas tecnológicas.",
    },
    {
        icon: CalendarDays,
        text: "Mini hackatones de programación para fomentar creatividad y colaboración.",
    },
    {
        icon: BriefcaseBusiness,
        text: "Formación de equipos y ampliación de portafolio profesional en proyectos reales.",
    },
    {
        icon: UserCog,
        text: "Sistema de rangos y liderazgo basado en participación y compromiso.",
    },
    {
        icon: CalendarDays,
        text: "Espacios de proyección y comercialización de proyectos y talentos.",
    },
    {
        icon: Users,
        text: "Acceso a redes de contacto y colaboraciones en la industria tecnológica y académica.",
    },
    {
        icon: Spotlight,
        text: "Fortalecimiento de habilidades blandas y competencias técnicas de alto nivel.",
    },
    {
        icon: MicVocal,
        text: "Participación en eventos, conferencias y competencias con visibilidad profesional.",
    },
];
const socials = [
    { label: "Facebook", href: "#discord", icon: "logos:facebook" },
    { label: "Discord", href: "#discord", icon: "skill-icons:discord" },
    { label: "Whatsapp", href: "#discord", icon: "logos:whatsapp-icon" },
    { label: "Github", href: "#discord", icon: "icon-park:github" },
    { label: "Linkedin", href: "#discord", icon: "skill-icons:linkedin" },
];
</script>

<template>
    <section class="panel">
        <div class="heasder">
            <h2 class="subtitles text-sec-color">Contenido del club</h2>
            <p class="normal-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                aspernatur, adipisci laborum omnis corrupti nostrum ipsa? Repudiandae
                eligendi a eos placeat qui ut, quis, ipsum commodi ab non, deleniti
                tenetur?
            </p>
        </div>


        <ul class="list">
            <li v-for="(bull, index) in bullets" :key="index" class="item">
                <component :is="bull.icon" class="icon" aria-hidden="true" />
                <span class="normal-text-bold">{{ bull.text }}</span>
            </li>
        </ul>
        <Sesions :sesionesFuturas="sesionesFuturas" />
        <div class="contact-cont">
            <div class="cta-row">
                <MainButton btnTitle="Unirme al club" />
                <MainButton btnTitle="Proponer un proyecto" buttonType="secondary" />
            </div>
            <p class="normal-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, maxime?
            </p>
            <div class="socials">
                <MainButton v-for="(s, i) in socials" :key="i" :btnTitle="s.label" :goTo="s.href" :icon="s.icon"
                    buttonType="link">
                    <template #icon>
                        <Icon :icon="s.icon" class="social-icon" aria-hidden="true" />
                    </template>
                </MainButton>
            </div>
        </div>



    </section>
</template>

<style scoped>
.panel {
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.heasder {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 48px;
    row-gap: 24px;
    width: 100%;
}

.item {
    display: grid;
    grid-template-columns: 24px 1fr;
    align-items: center;
    gap: 32px;
}

.icon {
    width: 32px;
    height: 32px;
    color: var(--sec-color);
}

.contact-cont {
    display: flex;
    margin-top: 32px;
    flex-direction: column;
    gap: 16px;
}

.cta-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.action-btns {
    /* min-width: 250px; */
    justify-content: center;
    display: flex;
}

.socials {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--main-color);
}

.social-link:hover {
    color: var(--main-color);
}

.social-icon {}

@media (max-width: 600px) {
    .list {
        grid-template-columns: 1fr;
    }

    .icon {
        width: 24px;
        height: 24px;
    }
}
</style>
