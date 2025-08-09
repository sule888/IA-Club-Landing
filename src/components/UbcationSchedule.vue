<template>
  <section class="info-container">
    <div class="map-section" data-aos="fade-right">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.0151831955845!2d-106.43507382487165!3d31.742786536120597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75be4f2e6252d%3A0x6a8d95f9da5e17!2sIIT!5e0!3m2!1ses!2smx!4v1754596350766!5m2!1ses!2smx"
        width="100%"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="info-section" data-aos="fade-left">
  <div class="info-item">
    <Calendar class="icon" />
    <span class="normal-text">7, 8 y 9 de Octubre de 2025</span>
  </div>

  <div class="info-item">
    <MapPin class="icon" />
    <span class="normal-text">            
      Instituto de Ingeniería y Tecnología, Juárez, Chihuahua
    </span>
  </div>

      
    </div>
  </section>
</template>

<script setup>
import { Calendar, MapPin } from 'lucide-vue-next'

</script>

<style scoped>
.info-container {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  overflow: visible;
  gap: 72px;
}
/* Responsivo */
@media (max-width: 768px) {
  .info-container {
    flex-direction: column;
  }
}

/* Mapa */
.map-frame {
  width: 100%;
  height: 100%;
  border: 0;
}

.map-section {
  flex: 1;
}

/* Información */
.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 48px;
}

.icon {
  color: var(--sec-color);
  height: 72px;
  width: 72px;
}

</style>
