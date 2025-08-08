<template>
  <a 
    class="nav-button"
    :class="{ 'nav-button-mobile': isMobile }"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <span class="nav-button-text" :class="{ 'text-active': isHovered }">
      {{ option.label }}
    </span>
    <div class="nav-button-indicator" :class="{ 'indicator-active': isHovered }"></div>
    <div class="nav-button-glow" :class="{ 'glow-active': isHovered }"></div>
  </a>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  option: {
    type: Object,
    required: true
  },
  isMobile: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const isHovered = ref(false)

const handleClick = () => {
  emit('click', props.option)
}

const onMouseEnter = () => {
  isHovered.value = true
}

const onMouseLeave = () => {
  isHovered.value = false
}
</script>

<style scoped>
.nav-button {
  position: relative;
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.75rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.nav-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(79, 157, 141, 0.3);
  background: rgba(79, 157, 141, 0.1);
  border-color: rgba(79, 157, 141, 0.3);
}

.nav-button-text {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.text-active {
  color: #d6e0de;
  transform: scale(1.05);
  text-shadow: 0 0 10px rgba(197, 211, 208, 0.5);
}

.nav-button-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #c1cfcc, #66b3a3);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
}

.indicator-active {
  width: 80%;
}

.nav-button-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, rgba(235, 248, 247, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 12px;
}

.glow-active {
  opacity: 1;
}

.nav-button-mobile {
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
}

.nav-button-mobile:hover {
  transform: translateX(8px) scale(1.02);
  background: rgba(79, 157, 141, 0.15);
}

.nav-button-mobile .nav-button-indicator {
  height: 2px;
  left: 0;
  transform: translateX(0);
  border-radius: 0 2px 2px 0;
}

.nav-button-mobile .indicator-active {
  width: 4px;
  height: 100%;
}

@media (max-width: 680px) {
  .nav-button {
    justify-content: flex-start;
  }
}
</style>