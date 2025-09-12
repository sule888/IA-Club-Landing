<script setup>
import CarouselMembers from "./CarrouselMembers.vue";
import CardMember from "./CardMember.vue";
import { computed, ref } from "vue";
import TitleMembersSection from "./TitleMembersSection.vue";

const props = defineProps({
    members: { type: Array, default: () => [] },
})
// separar por tipo
const comiteM = computed(() => props.members.filter(m => m.isComiteMember))
const regulars = computed(() => props.members.filter(m => !m.isComiteMember))

// v-model para el seleccionado del carrusel
const selected = ref(null)
</script>

<template>
    <section class="members-wrap">
        <TitleMembersSection />
        <CarouselMembers v-if="comiteM.length" :members="comiteM" v-model="selected" />

        <div v-if="regulars.length" class="grid">
            <CardMember v-for="(m, i) in regulars" :key="i" :member="m" />
        </div>
    </section>
</template>

<style scoped>
/* Fondo del padre */
.members-wrap {

    background: var(--main-color);
    padding: 32px 20px 48px;
}

/* Panel info */
.detail {
    margin: 18px auto 28px;
    max-width: 920px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #fff;
    border-radius: 16px;
    padding: 20px;
}

.title {
    font-size: 1.4rem;
    font-weight: 800;
}

.subtitle {
    margin-top: 2px;
    opacity: 0.95;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 10px 0;
}

.tag {
    padding: 4px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.16);
    color: #fff;
    font-weight: 600;
    font-size: 0.85rem;
}

.edu {
    opacity: 0.95;
}

.links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
}

.links a {
    color: #fff;
    text-decoration: underline;
}

.cv-btn {
    margin-top: 10px;
    display: inline-block;
    background: #fff;
    color: #0f1220;
    padding: 8px 14px;
    border-radius: 12px;
    font-weight: 700;
}

/* Grid miembros normales */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
    max-width: 1200px;
    margin: 0 auto;
}
</style>
