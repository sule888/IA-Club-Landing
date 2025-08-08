<template>
  <section ref="sectionRef" class="scroll-section">
    <!-- Imagen -->
    <img src="/src/assets/img/png/img-azul.png" alt="ciudad" class="city-image" />

    <!-- Cuadros -->
    <div class="cards-container" :class="{ 'joined': inView }">
      <div v-for="(card, index) in cards" :key="index" class="flip-card">
        <div class="flip-card-inner">
          <div :class="['flip-card-front', card.colorClass]">
            {{ card.label }}
          </div>
          <div class="flip-card-back">
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const inView = ref(false)

const cards = [
  { label: 'MT', description: 'Maestría en Tecnología', colorClass: 'color-mi' },
  { label: 'MII', description: 'Maestría en Ingeniería Industrial', colorClass: 'color-mii' },
  { label: 'DT', description: 'Doctorado en Tecnología', colorClass: 'color-dt' },
  { label: 'MIM', description: 'Maestría en Ingeniería de Manufactura', colorClass: 'color-mim' }
]

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    inView.value = entry.isIntersecting
  }, { threshold: 0.5 })

  if (sectionRef.value) observer.observe(sectionRef.value)

  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
.scroll-section {
 position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.city-image {
    height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateX(-20%);
  z-index: 1;
}

.cards-container {
    position: relative;
  display: grid;
  grid-template-columns: repeat(2, 250px);
  grid-template-rows: repeat(2, 250px);
  gap: 140px;
  justify-content: center;
  transition: gap 0.7s ease-in-out;
  z-index: 2;
}

.cards-container.joined {
  gap: 0px;
}

.flip-card {
  width: 250px;
  height: 250px;
  perspective: 1000px;
}

.flip-card-inner {
position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
  color: var(--background-color);
}

.flip-card-back {
   transform: rotateY(180deg);
  background-color: transparent;
  color: #333;
  padding: 20px;
  font-size: 14px;
  text-align: center;
  font-weight: normal;
}

/* Colores */
.color-mi {
  background-color: #d89c28;
}
.color-mii {
  background-color: #4d8873;
}
.color-dt {
  background-color: #f0481e;
}
.color-mim {
  background-color: #90a8ed;
}

/* Tablet */
@media (max-width: 1210px) {
  .scroll-section {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    height: auto;
    padding: 40px 5%;
  }

  .city-image {
    height: 300px;
    transform: translateX(0);
    object-fit: contain;
  }

  .cards-container {
    grid-template-columns: repeat(2, 200px);
    grid-template-rows: auto;
    gap: 30px;
    padding-top: 30px;
  }

  .flip-card {
    width: 200px;
    height: 200px;
  }
}

/* Móvil */
@media (max-width: 600px) {
  .cards-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .flip-card {
    width: 90vw;
    height: 90vw;
    max-width: 300px;
    max-height: 300px;
    margin: 0 auto;
  }

  .city-image {
    display: none; 
  }
}
</style>
