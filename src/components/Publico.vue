<template>
  <div 
    class="wrapper"
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <h2 class="title">ESPACIOS DE PARTICIPACIÓN</h2>

    <div class="main-content">
      <div 
        class="robot-section"
        @mouseenter="onAnimationZoneEnter"
        @mouseleave="onAnimationZoneLeave"
      >
        <Robot3D 
          width="100%" 
          :mouse-x="mouseX"
          :mouse-y="mouseY"
          :is-rotation-hover="isRotationHover"
          :is-animation-hover="isAnimationHover"
        />
      </div>

      <div class="items-grid">
        <div class="item-card">
          <User class="icon" />
          <h3>Estudiantes</h3>
          <p>Futuros líderes y agentes de cambio social</p>
        </div>

        <div class="item-card">
          <GraduationCap class="icon" />
          <h3>Académicos</h3>
          <p>Promotores del conocimiento y la innovación educativa</p>
        </div>

        <div class="item-card">
          <Globe class="icon" />
          <h3>Sociedad</h3>
          <p>Contexto cultural y social para el desarrollo humano</p>
        </div>

        <div class="item-card">
          <Briefcase class="icon" />
          <h3>Empresarios</h3>
          <p>Impulsores del crecimiento económico y oportunidades laborales</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Robot3D from './Robot3D.vue'
import { User, GraduationCap, Globe, Briefcase } from 'lucide-vue-next'

const mouseX = ref(0)
const mouseY = ref(0)
const isRotationHover = ref(false)
const isAnimationHover = ref(false)

const onMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  mouseX.value = (event.clientX - centerX) / rect.width
  mouseY.value = (event.clientY - centerY) / rect.height
}

const onMouseEnter = () => {
  isRotationHover.value = true
}

const onMouseLeave = () => {
  isRotationHover.value = false
  isAnimationHover.value = false
  mouseX.value = 0
  mouseY.value = 0
}

const onAnimationZoneEnter = () => {
  isAnimationHover.value = true
}

const onAnimationZoneLeave = () => {
  isAnimationHover.value = false
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

.title {
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.main-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
}

.items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  flex: 1;
  max-width: 600px;
}

.item-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.item-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 36px;
  height: 36px;
  margin: 0 auto 1rem;
  color: #6b7280;
  transition: color 0.3s ease;
}

.item-card:hover .icon {
  color: #3b82f6;
}

.item-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  color: #1f2937;
}

.item-card p {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #6b7280;
  margin: 0;
}

.robot-section {
  flex: 0 0 400px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 1024px) {
  .main-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .items-grid {
    max-width: 100%;
    grid-template-columns: 1fr 1fr;
  }
  
  .robot-section {
    flex: none;
    width: 100%;
    height: 400px;
  }
}

@media (max-width: 768px) {
  .wrapper {
    padding: 0.75rem;
  }
  
  .title {
    margin-bottom: 1.5rem;
  }
  
  .main-content {
    gap: 1.5rem;
  }
  
  .items-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .item-card {
    padding: 1.25rem;
  }
  
  .item-card h3 {
    font-size: 1rem;
  }
  
  .item-card p {
    font-size: 0.85rem;
  }
  
  .robot-section {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .wrapper {
    padding: 0.5rem;
  }
  
  .title {
    margin-bottom: 1rem;
  }
  
  .items-grid {
    gap: 0.75rem;
  }
  
  .item-card {
    padding: 1rem;
  }
  
  .icon {
    width: 28px;
    height: 28px;
    margin-bottom: 0.75rem;
  }
  
  .item-card h3 {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
  
  .item-card p {
    font-size: 0.8rem;
    line-height: 1.3;
  }
  
  .robot-section {
    height: 250px;
  }
}

@media (max-width: 320px) {
  .wrapper {
    padding: 0.25rem;
  }
  
  .title {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  
  .items-grid {
    gap: 0.5rem;
  }
  
  .item-card {
    padding: 0.75rem;
  }
  
  .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 0.5rem;
  }
  
  .item-card h3 {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
  
  .item-card p {
    font-size: 0.75rem;
    line-height: 1.2;
  }
  
  .robot-section {
    height: 200px;
  }
  
}</style>