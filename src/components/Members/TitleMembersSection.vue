<template>
    <div class="main-cont">
        <div class="marquee-track scroll-right">
            <div class="marquee-item " v-for="i in 10" :key="i">
                <span class="icon"><img src="/src//assets//img/analisis-predictivo.png" alt="Robot icon" width="48"
                        height="48" />

                </span>
                <span class="titles text-white-color ">Miembros</span>
            </div>
        </div>

    </div>
</template>

<script setup>
</script>
<style scoped>
.main-cont {
    display: flex;
    flex-direction: column;
    padding-top: 64px;
}

.marquee-track {
    display: flex;
    width: max-content;
    gap: 64px;
    animation: scroll-right 40s linear infinite;

}

.marquee-item {
    display: flex;
    align-items: center;
    gap: 48px;

}

@keyframes scroll-right {
    0% {
        transform: translateX(-50%);
    }

    100% {
        transform: translateX(0%);
    }
}
</style>