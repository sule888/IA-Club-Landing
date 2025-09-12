<script setup>
import { ref } from "vue"
import { Carousel, Slide, Navigation } from "vue3-carousel"
import "vue3-carousel/dist/carousel.css"
import { computed, onMounted } from "vue"

const props = defineProps({
    members: {
        type: Array,
        default: () => [
            {
                name: "Laura Davis",
                isComiteMember: true,
                rol: "Presidenta",
                img: "https://picsum.photos/seed/laura/600/800",
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
                isComiteMember: true,
                rol: "CTO",
                img: "https://picsum.photos/seed/tom/600/800",
                CurrentOcupation: "CTO @ StartUp",
                TechStack: ["TS", "Node", "AWS"],
                Education: "B.Sc. CS — UACJ",
                cv: "",
                ContactMedia: [],
            },
        ],
    },
    modelValue: { type: Object, default: null },
})
const emit = defineEmits(["update:modelValue"])

// proxy de v-model
const selected = computed({
    get: () => props.modelValue,
    set: (val) => emit("update:modelValue", val),
})

onMounted(() => {
    if (!selected.value && props.members.length) {
        selected.value = props.members[0]
    }
})

const onSelect = (m) => { selected.value = m }

</script>

<template>
    <div class="carousel-wrap">
        <Carousel :items-to-show="3" :wrap-around="true" :transition="500" :gap="16">
            <Slide v-for="(m, i) in members" :key="i">
                <button class="card" @click="onSelect(m)">
                    <img :src="m.img" :alt="m.name" class="img" />
                </button>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>

        <!-- Detalle del miembro seleccionado -->
        <div v-if="selected" class="detail">
            <h2 class="title">{{ selected.name }}</h2>
            <p class="subtitle">
                <strong v-if="selected.rol">{{ selected.rol }}</strong>
                <span v-if="selected.CurrentOcupation"> · {{ selected.CurrentOcupation }}</span>
            </p>

            <ul v-if="selected.TechStack?.length" class="tags">
                <li v-for="(t, i) in selected.TechStack" :key="i" class="tag">{{ t }}</li>
            </ul>

            <p v-if="selected.Education" class="edu">{{ selected.Education }}</p>

            <div class="links" v-if="selected.ContactMedia?.length">
                <a v-for="(l, i) in selected.ContactMedia" :key="i" :href="l.link" target="_blank" rel="noopener">
                    {{ l.iconName || l.link }}
                </a>
            </div>

            <a v-if="selected.cv" :href="selected.cv" target="_blank" rel="noopener" class="cv-btn">Ver CV</a>
        </div>
    </div>
</template>

<style scoped>
.carousel-wrap {
    width: 100%;
}

/* “zoom” al slide activo sin hacks raros */
:deep(.carousel__slide) {
    transition: transform .25s ease;
    transform: scale(.92);
}

:deep(.carousel__slide--active) {
    transform: scale(1.05);
}

.card {
    width: 180px;
    height: 280px;
    border-radius: 22px;
    overflow: hidden;
    background: #111;
    box-shadow: 0 10px 24px rgba(0, 0, 0, .18);
}

.img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Detalle */
.detail {
    margin: 18px auto 28px;
    max-width: 920px;
    color: #fff;
    background: rgba(255, 255, 255, .10);
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 16px;
    padding: 20px;
}

.title {
    font-size: 1.35rem;
    font-weight: 800;
}

.subtitle {
    margin-top: 2px;
    opacity: .95;
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
    background: rgba(255, 255, 255, .16);
    font-weight: 600;
    font-size: .85rem;
}

.edu {
    opacity: .95;
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
</style>
