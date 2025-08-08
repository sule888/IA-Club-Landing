<template>
  <div class="wrapper">
    <!-- TÍTULO -->
    <h2 class="title">ESPACIOS DE PARTICIPACIÓN</h2>

    <!-- Fila 1: texto 1 | robot | texto 2 -->
    <div class="row first-row">
      <div class="text-block">
        <User class="icon" />
        <p>
          <strong>Estudiantes</strong><br />
          Futuros líderes y agentes de cambio social
        </p>
      </div>

      <div class="robot-container">
        <Robot3D width="700px" />
      </div>

      <div class="text-block">
        <GraduationCap class="icon" />
        <p>
          <strong>Académicos</strong><br />
          Promotores del conocimiento y la innovación educativa
        </p>
      </div>
    </div>

    <!-- Fila 2: texto 3 | texto 4 -->
    <div class="row second-row">
      <div class="text-block">
        <Globe class="icon" />
        <p>
          <strong>Sociedad</strong><br />
          Contexto cultural y social para el desarrollo humano
        </p>
      </div>

      <div class="text-block">
        <Briefcase class="icon" />
        <p>
          <strong>Empresarios</strong><br />
          Impulsores del crecimiento económico y oportunidades laborales
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Robot3D from './Robot3D.vue'
import { User, GraduationCap, Globe, Briefcase } from 'lucide-vue-next'
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  text-align: center;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.first-row {
  margin-bottom: 2.5rem;
  flex-wrap: nowrap;
}

.second-row {
  flex-wrap: nowrap;
  gap: 4rem;
}

.robot-container {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 700px;
}

.text-block {
  max-width: 240px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
}

.text-block strong {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 0.5rem;
  color: #6b7280;
}

/* Medium screens: tablet */
@media (max-width: 1024px) {
  .first-row {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .second-row {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .robot-container {
    transform: scale(0.9);
    margin: 1rem 0;
    height: 500px;
    width: 500px;
  }

  .text-block {
    max-width: 300px;
  }
}

/* Small screens: mobile */
@media (max-width: 640px) {
  .title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .icon {
    width: 32px;
    height: 32px;
  }

  .text-block {
    font-size: 1rem;
    max-width: 90%;
  }

  .robot-container {
    margin: 1.5rem 0;
    padding: 0 1rem;
  }
}
</style>
