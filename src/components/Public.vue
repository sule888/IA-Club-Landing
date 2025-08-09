<template>
  <div 
    
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <h2 class="titles">Espacios de participacion</h2>

    <div class="main-content">
      <div 
        class="robot-section"
        @mouseenter="onAnimationZoneEnter"
        @mouseleave="onAnimationZoneLeave"
      >
        <Robot3D 
          width="500px" 
          :mouse-x="mouseX"
          :mouse-y="mouseY"
          :is-rotation-hover="isRotationHover"
          :is-animation-hover="isAnimationHover"
        />
      </div>

      <div class="items-grid">
        <div class="item-card">
          <User class="icon" />
          <h1 class="subtitles">Estudiantes</h1>
          <p class="normal-text">Futuros líderes y agentes de cambio social</p>
        </div>

        <div class="item-card">
          <GraduationCap class="icon" />
          <h1 class="subtitles">Académicos</h1>
          <p class="normal-text">Promotores del conocimiento y la innovación educativa</p>
        </div>

        <div class="item-card">
          <Globe class="icon" />
          <h1 class="subtitles">Sociedad</h1>
          <p class="normal-text">Contexto cultural y social para el desarrollo humano</p>
        </div>

        <div class="item-card">
          <Briefcase class="icon" />
          <h1 class="subtitles">Empresarios</h1>
          <p class="normal-text">Impulsores del crecimiento económico y oportunidades laborales</p>
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
h1{
  margin-bottom: 16px;
}
.title {
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

.main-content {
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: space-between;
}
.robot-section {
  /* responsive */
  flex: 0 0 400px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  flex: 1;
  max-width: 900px;
}

.item-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 24px;
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
  width:48px;
  height:64px;
  margin: 0 auto 1rem;
  color: #6b7280;
  transition: color 0.3s ease;
}

.item-card:hover .icon {
  color: var(--sec-color);
}


@media (max-width: 1200px) {
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

@media (max-width: 650px) {
  .items-grid {
    grid-template-columns: 1fr;
  }
  
  .robot-section {
    height: 550px;
  }
}

</style>