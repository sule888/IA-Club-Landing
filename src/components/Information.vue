<template>
  <div class="information-cont">
    <div class="info-item titles">Presentación</div>
    <div class="divider"></div>
    <div class="info-item normal-text">
      La innovación y la investigación son motores clave para el desarrollo de una sociedad próspera. Hoy más que nunca, impulsar el conocimiento y las tecnologías de frontera es una prioridad.
      Por eso, la Universidad Autónoma de Ciudad Juárez, a través del Departamento de Ingeniería Industrial y Manufactura del Instituto de Ingeniería y Tecnología, te invita a formar parte del Congreso Internacional de las Fronteras de la Ingeniería: Investigación para un Mundo Conectado.
      <br />
      Este espacio nace con la misión de reunir a investigadores, estudiantes y profesionales apasionados por la tecnología, con el objetivo de compartir ideas, proyectos y soluciones que impacten positivamente en nuestra sociedad.
      <br />
      Creemos en el poder del trabajo en red y en la colaboración como herramientas para generar propuestas reales frente a los retos sociales, económicos y ambientales actuales.
    </div>
  </div>
</template>


<script setup>

</script>

<style scoped>
.information-cont {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.info-title {
  white-space: nowrap; /* Evita que se expanda */
  margin-right: 16px;
}

.divider {
  width: 36px;
  background-color: var(--main-color);
  height: auto;
  min-height: 150px;
  align-self: stretch;
  margin: 0 32px; /* separa de ambos lados */
}

.info-text {
  flex: 1; /* ocupa todo el espacio restante */
}

/* Responsive para móviles */
@media (max-width: 950px) {
  .information-cont {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info-title {
    margin-right: 0;
    margin-bottom: 16px;
    white-space: normal;
  }

  .divider {
    width: 100%;
    height: 6px;
    min-height: unset;
    margin: 32px 0;
  }

  .info-text {
    width: 100%;
  }
}

</style>