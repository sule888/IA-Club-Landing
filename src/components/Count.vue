<template>
  <div>
    <div v-if="congresoIniciado" class="mensaje-congreso">
      ¡El primer día del congreso ya está comenzando!!
    </div>
    <div v-else class="countdown-container">
      <div class="countdown-item">
        <div class="subtitles cont-number">{{ countdown.days }}</div>
        <div class="normal-text">Días</div>
      </div>
      <div class="countdown-item">
        <div class="subtitles cont-number">{{ countdown.hours }}</div>
        <div class="normal-text">Horas</div>
      </div>
      <div class="countdown-item">
        <div class="subtitles cont-number">{{ countdown.minutes }}</div>
        <div class="normal-text">Minutos</div>
      </div>
      <div class="countdown-item">
        <div class="subtitles cont-number">{{ countdown.seconds }}</div>
        <div class="normal-text">Segundos</div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const congresoIniciado = ref(false);
let countdownInterval = null;

function startCountdown() {
  const targetDate = new Date("2025-09-18T09:00:00").getTime();

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      congresoIniciado.value = true;
      return;
    }

    countdown.value.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.value.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    countdown.value.minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    countdown.value.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }, 1000);
}

onMounted(() => {
  startCountdown();
});

onBeforeUnmount(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});
</script>


<style scoped>
.countdown-container {
  display: flex;
  gap: 32px;
}

.countdown-item {
  text-align: center;
  background: #b088de;
  color: white;
  padding: 1.5rem 1rem;
  border-radius: 15px;
  min-width: 80px;
  box-shadow: 0 8px 25px rgba(176, 136, 222, 0.3);
}
.cont-number{
  font-weight: bold;
}


@media (max-width: 1200px) {
  .countdown-container {
    gap: 1rem;
  }

  .countdown-item {
    min-width: 64px;
    padding: 1rem 0.8rem;
  }

}
@media (max-width: 950px) {
.countdown-container {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 650px) {
  .countdown-item {
    min-width: 32px;
    padding: 0.8rem 0.6rem;
  }

   .countdown-container {
    justify-content: center;
    flex-wrap: wrap;
  }
}



.mensaje-congreso {
  background: #b088de;
  color: white;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  text-align: center;
  font-weight: bold;
  animation: fadeInUp 1s ease-in-out;
  max-width: 800px;
  width: 70%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 850px) {
 .mensaje-congreso {
  width: 100%;
}

}

</style>
