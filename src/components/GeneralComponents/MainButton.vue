<template>
    <div>
        <a v-if="buttonType === 'link'" :href="goTo" target="_blank" rel="noopener noreferrer" class="link">
            <slot name="icon" />
            <span class="normal-text">{{ btnTitle }}</span>
        </a>

        <button v-else :class="buttonClass" type="button">
            <span class="normal-text">{{ btnTitle }}</span>
        </button>
    </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
    btnTitle: { type: String, default: "Main Button" },
    goTo: { type: String, default: "#" },
    buttonType: {
        type: String,
        default: "main",
        validator: (val) => ["main", "secondary", "link"].includes(val),
    },
    icon: { type: [String, Object], default: null },
})

const buttonClass = computed(() => {
    return props.buttonType === "secondary" ? "secondary-btn" : "main-btn"
})
</script>

<style scoped></style>
