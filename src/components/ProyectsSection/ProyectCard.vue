<template>
    <div class="card">
        <div class="thumb" role="img" :aria-label="`Imagen de ${p.title}`">
            <img v-if="p.image" :src="p.image" :alt="p.title" />
            <div v-else class="thumb-fallback">
                <Icon icon="mdi:image-multiple-outline" class="fallback-icon" aria-hidden="true" />
            </div>
        </div>

        <h3 class="card-title">{{ p.title }}</h3>

        <div class="area-chip">
            <Icon :icon="p.area?.icon || 'mdi:briefcase-outline'" class="area-icon" aria-hidden="true" />
            <span class="normal-text">{{ p.area?.label || 'General' }}</span>
        </div>

        <p class="normal-text desc">
            {{ p.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }}
        </p>

        <div class="stack">
            <span class="normal-text-bold stack-label">Stack:</span>
            <div class="stack-icons">
                <Icon v-for="(t, i) in p.stack || []" :key="i" :icon="t.icon" class="stack-icon"
                    :style="{ color: t.color || 'inherit' }" :title="t.label" aria-hidden="true" />
            </div>
        </div>

        <div class="client normal-text">
            <Icon icon="mdi:domain" class="client-icon" aria-hidden="true" />
            {{ p.clientName || 'Cliente confidencial' }}
        </div>

        <div class="card-actions">
            <button class="main-btn ghost" @click="openDetails(p)">
                <Icon icon="mdi:information-outline" class="btn-icon" aria-hidden="true" />
                Conoce más del proyecto
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    id: { type: Number },
    title: {
        type: String,
        defaul
    }

})
</script>

<style scoped></style>