<template>
  <section class="mesas-section">
    <div class="section-header">
      <h2 class="titles text-main-color"> Temas de Mesas Redondas</h2>
      <p class="normal-text">
        Espacios de diálogo y colaboración para explorar los desafíos y
        oportunidades en el ámbito industrial, educativo y tecnológico de la
        región.
      </p>
    </div>

    <!-- Mesa 1 -->
    <div class="mesa-item" data-aos="fade-up">
      <h3 class="subtitles text-sec-color">
        Automatización, Industria 4.0 y el Reto de la Transformación Digital
        Regional
      </h3>
      <div class="text-part">
        <p class="normal-text">
          <strong>Objetivo:</strong> Compartir experiencias de implementación de
          automatización, robotización, monitoreo inteligente y digitalización
          de procesos en empresas de la frontera.
        </p>
        <p class="normal-text">
          <strong>Participantes sugeridos:</strong><br />
          - Ingenieros industriales y de manufactura de empresas locales<br />
          - Estudiantes o docentes de la Maestría en Manufactura<br />
          - Integradores de sistemas, expertos en gemelos digitales o
          mantenimiento 4.0
        </p>
        <p class="normal-text">
          <strong>Conexión:</strong> industria 4.0, mantenimiento, tecnologías
          emergentes
        </p>
        <!-- Espacio para imágenes -->
        <!-- <div class="mesa-images">
        <img src="ruta1.jpg" alt="imagen1" />
        <img src="ruta2.jpg" alt="imagen2" />
        <img src="ruta3.jpg" alt="imagen3" />
      </div> -->
      </div>
    </div>

    <!-- Mesa 2 -->
    <div class="mesa-item" data-aos="fade-up">
      <h3 class="subtitles text-sec-color">
        El Ingeniero del Futuro: Competencias, Investigación y Especialización
        en la Era Tecnológica
      </h3>
      <div class="text-part">
        <p class="normal-text">
          <strong>Objetivo:</strong> Explorar cómo deben converger la formación
          técnica, las habilidades blandas, la investigación aplicada y las
          demandas reales del sector industrial.
        </p>
        <p class="normal-text">
          <strong>Participantes sugeridos:</strong><br />
          - Coordinadores de posgrado<br />
          - Ingenieros líderes de planta<br />
          - Egresados de maestría/doctores trabajando en la industria<br />
          - Profesores-investigadores en manufactura o automatización
        </p>
        <p class="normal-text"><strong>Conexión:</strong> todos los ejes</p>
        <!-- Espacio para imágenes -->
        <!-- <div class="mesa-images">
        <img src="ruta1.jpg" alt="imagen1" />
        <img src="ruta2.jpg" alt="imagen2" />
        <img src="ruta3.jpg" alt="imagen3" />
      </div> -->
      </div>
    </div>

    <!-- Mesa 3 -->
    <div class="mesa-item" data-aos="fade-up">
      <h3 class="subtitles text-sec-color">
        Investigación Aplicada y Transferencia Tecnológica: ¿Cómo Vincular al
        Posgrado con la Industria de la región?
      </h3>
      <div class="text-part">
        <p class="normal-text">
          <strong>Objetivo:</strong> Analizar cómo convertir proyectos de tesis,
          prototipos o desarrollos académicos en soluciones reales para la
          industria manufacturera y tecnológica de la región.
        </p>
        <p class="normal-text">
          <strong>Participantes sugeridos:</strong><br />
          - Estudiantes de posgrado<br />
          - Jefes de ingeniería o innovación en empresas<br />
          - Gestores de vinculación o transferencia tecnológica<br />
          - Investigadores del doctorado en Tecnología
        </p>
        <p class="normal-text">
          <strong>Conexión:</strong> manufactura, tecnologías emergentes, diseño
          mecánico
        </p>
        <!-- Espacio para imágenes -->
        <!-- <div class="mesa-images">
        <img src="ruta1.jpg" alt="imagen1" />
        <img src="ruta2.jpg" alt="imagen2" />
        <img src="ruta3.jpg" alt="imagen3" />
      </div> -->
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.mesas-section {
  background-color: var(--background-color);
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.section-header {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.mesa-item {
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
}
.text-part{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.mesa-images {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.mesa-images img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .mesa-item {
    padding: 20px;
  }

  .mesa-images {
    flex-direction: column;
    align-items: center;
  }

  .mesa-images img {
    width: 80px;
    height: 80px;
  }
}
</style>
