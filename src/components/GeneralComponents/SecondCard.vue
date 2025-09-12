<template>

    <div class="card">
        <div class="card-overlay" :style="{ backgroundImage: `url(${img})` }"></div>
        <div class="card-content">
            <component :is="icon" class="icon" aria-hidden="true" />
            <h3 class="normal-text-bold">{{ title }}</h3>

        </div>
        <p v-if="info">{{ info }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    icon: {
        type: String,
        default: null
    },
    title: {
        type: String,
        default: 'Second card'
    },
    img: {
        type: String,
        default: ''
    }
    ,
    info: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.card {
    overflow: hidden;
    cursor: pointer;
    background: white;
    border-radius: 8px;
    padding: 24px;
    min-height: auto;
    border: 2px solid var(--main-color);
    align-items: center;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.card-content {
    position: relative;
    z-index: 2;
    gap: 32px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
}

.card:hover .card-overlay {
    opacity: 0.4;
}

.icon {
    width: 32px;
    height: 32px;
    color: var(--main-color);
}
</style>