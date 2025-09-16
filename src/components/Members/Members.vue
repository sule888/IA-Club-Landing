<script setup>
import { computed } from "vue";
import CardMember from "./CardMember.vue";
import TitleMembersSection from "./TitleMembersSection.vue";
import Perfil from "../../assets/img/perfiles/perfil1.png";
import Perfil2 from "../../assets/img/perfiles/perfil2.png";


const props = defineProps({
    members: { type: Array, default: () => [] },
});

const defaultMembers = [
    {
        name: "Laura Davis",
        rol: "Presidenta",
        img: Perfil,
        CurrentOcupation: "ML Engineer @ AI Labs",
        TechStack: ["Python", "PyTorch", "GCP"],
        Education: "M.Sc. IA — UNAM",
        cv: "",
        ContactMedia: [
            { iconName: "Linkedin", link: "https://linkedin.com" },
            { iconName: "Github", link: "https://github.com" },
        ],
    },
    {
        name: "Tom White",
        rol: "CTO",
        img: Perfil2,
        CurrentOcupation: "CTO @ StartUp",
        TechStack: ["TS", "Node", "AWS"],
        Education: "B.Sc. CS — UACJ",
        cv: "",
        ContactMedia: [],
    },
    {
        name: "Ana García",
        rol: "Coordinadora",
        img: Perfil2,
        CurrentOcupation: "Data Scientist @ FinTech",
        TechStack: ["Python", "SQL", "dbt"],
        Education: "M.Sc. DS — IPN",
        cv: "",
        ContactMedia: ["https://linkedin.com"],
    },
    {
        name: "Sarah Williams",
        rol: "",
        img: Perfil,
        CurrentOcupation: "Frontend Dev",
        TechStack: ["Vue", "Vite"],
        Education: "Ing. Sistemas",
        cv: "",
        ContactMedia: ["https://github.com"],
    },
    {
        name: "David Miller",
        rol: "",
        img: Perfil,
        CurrentOcupation: "Backend Dev",
        TechStack: ["Go", "Postgres"],
        Education: "Ing. Software",
        cv: "",
        ContactMedia: [],
    },
    {
        name: "Emily Johnson",
        rol: "",
        img: Perfil2,
        CurrentOcupation: "Data Analyst",
        TechStack: ["SQL", "Tableau"],
        Education: "Lic. Matemáticas",
        cv: "",
        ContactMedia: [],
    },
    {
        name: "Jillie Bernard",
        rol: "",
        img: Perfil2,
        CurrentOcupation: "UX Designer",
        TechStack: ["Figma"],
        Education: "Diseño",
        cv: "",
        ContactMedia: [],
    },
];

const items = computed(() =>
    props.members && props.members.length ? props.members : defaultMembers
);
</script>

<template>
    <section class="main-cont">
        <div class="margin members-cont">
            <TitleMembersSection />
            <div v-if="items.length" class="grid">
                <CardMember v-for="(m, i) in items" :key="i" :member="m" />
            </div>
        </div>

    </section>
</template>

<style scoped>
.main-cont {
    background: var(--main-color);
    padding-bottom: 64px;
}

.members-cont {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
}
</style>
