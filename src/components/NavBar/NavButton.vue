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
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s cubic-bezier(0.2, 0, 0.2, 1);
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  letter-spacing: 0.025em;
}

.nav-button:hover {
  transform: translateY(-1px);
  color: #2d3748;
  cursor: pointer;
}

.nav-button-text {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.text-active {
  color: #2d3748;
  font-weight: 600;
}

.nav-button-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--main-color);
  transition: width 0.3s cubic-bezier(0.2, 0, 0.2, 1);
  border-radius: 1px;
}

.indicator-active {
  width: 95%;
}

.nav-button-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(226, 232, 240, 0.3) 0%, rgba(237, 242, 247, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

.glow-active {
  opacity: 1;
}

.nav-button-mobile {
  font-size: 0.95rem;
  padding: 0.8rem 1rem;
  margin-bottom: 0.3rem;
  border-radius: 6px;
  background: transparent;
  justify-content: flex-start;
}

.nav-button-mobile:hover {
  transform: translateX(4px);
  background: rgba(237, 242, 247, 0.6);
  border-color: rgba(203, 213, 224, 0.4);
}

.nav-button-mobile .nav-button-indicator {
  height: 100%;
  width: 0;
  left: 0;
  top: 0;
  transform: translateX(0);
  border-radius: 0 3px 3px 0;
  background: linear-gradient(180deg, #4a5568, #718096);
}

.nav-button-mobile .indicator-active {
  width: 3px;
}

@media (max-width: 680px) {
  .nav-button {
    justify-content: flex-start;
    font-size: 0.95rem;
  }
}
</style>