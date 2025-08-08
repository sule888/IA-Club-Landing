<template>
    <section class="info-container">
        <div class="map-section" data-aos="fade-right">

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.0151831955845!2d-106.43507382487165!3d31.742786536120597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75be4f2e6252d%3A0x6a8d95f9da5e17!2sIIT!5e0!3m2!1ses!2smx!4v1754596350766!5m2!1ses!2smx"
                width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div class="info-section" data-aos="fade-left">
            <div class="info-item">
                <svg class="icon" viewBox="0 0 24 24">
                    <path fill="#4F9D8D" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-2 .89-2 2v14c0 
          1.11.89 2 2 2h14c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2M5 
          20V9h14v11H5m14-13H5V6h14v1z" />
                </svg>
                <span class="text">7, 8 y 9 de octubre de 2025</span>
            </div>

            <div class="info-item">
                <svg class="icon" viewBox="0 0 24 24">
                    <path fill="#4F9D8D" d="M12 2C8.13 2 5 5.13 5 
          9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 
          9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 
          2.5-2.5 2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <span class="text">Instituto de Ingeniería y Tecnología, Juárez, Chihuahua</span>
            </div>

            <div v-if="pdfAvailable" class="pdf-link">
                <a :href="pdfUrl" target="_blank">Formulario de inscripción</a>
            </div>
            <div v-else class="pdf-message">
                * El formulario de inscripción aún no está disponible.
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pdfUrl = '/docs/formulario_inscripcion.pdf'
const pdfAvailable = ref(false)

onMounted(async () => {
    try {
        const res = await fetch(pdfUrl, { method: 'HEAD' })
        pdfAvailable.value = res.ok
    } catch {
        pdfAvailable.value = false
    }
})
</script>

<style scoped>
/* Layout */
.info-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    overflow: hidden;
    gap: 32px;
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
    margin-bottom: 1rem;
}

.icon {
    width: 72px;
    height: 72px;
    margin-right: 1rem;
    flex-shrink: 0;
}

.text {
    font-size: 1rem;
}

/* Link PDF */
.pdf-link a {
    color: var(--main-color);
    font-weight: bold;
    text-decoration: underline;
    text-underline-offset: 4px;
}

.pdf-message {
    font-size: 0.9rem;
    color: #888;
    margin-top: 1rem;
}

</style>
