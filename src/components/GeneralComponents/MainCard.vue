<template>
    <div>
        <div class="main-cont-card">
            <img src="" alt="" v-if="img" class="img">
            <h2 class="subtitles">{{ titleCard }}</h2>
            <component v-if="icon" :is="icon" class="icon" />
            <p class="normal-text">{{ info }}</p>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    titleCard: { type: String, default: "Main card" },
    info: { type: String, default: "" },
    icon: { type: Object, default: null },
    goTo: { type: String, default: '#' },
    img: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.main-cont-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(77, 73, 73, 0.278);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    gap: 16px;
    min-height: 380px;
}

.main-cont-card:hover {
    cursor: pointer;
    background-color: transparent;
    border: var(--main-color) 2px solid;
    transform: translateY(-4px);
}

.img {}

.icon {
    width: 48px;
    height: 64px;
    margin: 0 auto 1rem;
    color: var(--sec-color);
    transition: color 0.3s ease;
}
</style>