<template>
  <section class="cronograma-section">
    <h2 class="titles ">Cronograma</h2>

    <div class="cronograma-table">
      <div v-for="(item, index) in cronograma" :key="index" class="cronograma-row">
        <div class="actividad normal-text"><strong>{{ item.actividad }}</strong></div>
        <div class="fecha normal-text">{{ item.fecha }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cronograma = [
  {
    actividad: "Apertura de la convocatoria para la participación en el evento",
    fecha: "30 de julio del 2025"
  },
  {
    actividad: "Límite de inscripción en el evento en los diferentes roles de participación",
    fecha: "16 de agosto del 2025"
  },
  {
    actividad: "Evaluación de postulaciones",
    fecha: "01-12 de agosto del 2025"
  },
  {
    actividad: "Respuesta a participantes",
    fecha: "01-12 de agosto del 2025"
  },
  {
    actividad: "Socialización de la agenda del evento",
    fecha: "21 de agosto del 2025"
  },
  {
    actividad: "Desarrollo del evento",
    fecha: "18 al 19 de septiembre del 2025"
  }
]
</script>

<style scoped>

.cronograma-table {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.cronograma-row {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: start;
  background: #fff;
  border-radius: 8px;
  border-left: 6px solid var(--main-color);
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}



.fecha {
  text-align: right;
  font-weight: 500;
  color: var(--sec-color);
}

/* Responsive */
@media (max-width: 768px) {
  .cronograma-row {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .fecha {
    text-align: left;
  }
}
</style>
