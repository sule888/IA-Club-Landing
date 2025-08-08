<!-- <template>
  <section class="organizador-section">
    <h2 ref="animatedText" class="animated-text">
      Organizadores y contactos
    </h2>
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
</script>

<style scoped>
.organizador-section {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
}

.animated-text {
  font-size: 2rem;
  font-weight: bold;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  perspective: 800px;
}
</style> -->
