<template>
  <section class="organizador-section">
    <h1 ref="animatedText" class="animated-text titles">
      {{ title }}
    </h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const animatedText = ref(null)

onMounted(() => {
  gsap.fromTo(
    animatedText.value,
    {
      opacity: 0,
      rotateY: 90,
      x: 100,
    },
    {
      opacity: 1,
      rotateY: 0,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: animatedText.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  )
})

const props = defineProps({
  title: {
    type: String
  }
})
</script>

<style scoped>
.organizador-section {
  display: flex;
  justify-content: initial;
  align-items: center;
}

.animated-text {
  font-weight: bold;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  perspective: 800px;
}
</style>
