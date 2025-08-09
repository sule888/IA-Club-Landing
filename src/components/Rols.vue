<template>
  <section class="roles-section">
    <div class="main-cont">
      <div>
        <h1 class="titles">Roles de Participación</h1>
        <p class="normal-text">
          Este evento contempla dos tipos de participación principales: por un
          lado, estudiantes e investigadores que buscan compartir sus avances en
          proyectos académicos; y por otro, representantes del sector
          empresarial que expondrán experiencias y casos de éxito para fomentar
          el espíritu emprendedor entre los asistentes.
        </p>
      </div>
      <div class="roles-wrapper">
        <!-- Rol 1: Alumnos e Investigadores -->
        <div class="rol rol-1" data-aos="fade-right">
          <h1 class="subtitles text-sec-color">
            Investigadores para la Sociedad del Conocimiento
          </h1>
          <p class="normal-text">
            Este espacio está dirigido a alumnos (licenciatura y posgrado) y
            docentes investigadores que deseen exponer sus proyectos en formato
            virtual o presencial. Las ponencias tendrán una duración de 15 a 20
            minutos, según corresponda.
          </p>
          <br />
          <ul>
            <li
              class="normal-text"
              v-for="(item, index) in rol1Requisitos"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <a
            class="link normal-text text-main-color"
            href="/docs/estructura_resumen_investigacion.pdf"
            target="_blank"
            >Descargar estructura del resumen (PDF)</a
          >
          <br />
          <a
            class="link normal-text text-main-color"
            href="/docs/formato_registro_investigadores.pdf"
            target="_blank"
            >Llenar formato de registro (PDF)</a
          >
        </div>

        <!-- Rol 2: Empresarios -->
        <div class="rol rol-2" data-aos="fade-left">
          <h1 class="subtitles text-sec-color">
            Relacionamiento con el Sector Empresarial
          </h1>
          <p class="normal-text">
            Invitamos a empresarios y representantes de gremios industriales a
            compartir casos de éxito reales, con el fin de acercar a los
            asistentes a la realidad del entorno empresarial y fortalecer el
            espíritu emprendedor.
          </p>
          <br />

          <ul>
            <li
              class="normal-text"
              v-for="(item, index) in rol2Requisitos"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const rol1Requisitos = [
  "Enviar resumen del proyecto en el formato oficial del evento.",
  "Los resúmenes serán publicados en las memorias del congreso.",
  "Registro obligatorio con los datos de 3 posibles asistentes.",
  "Modalidad: Virtual o Presencial.",
  "Se notificará la aprobación por medio del correo institucional.",
  "Certificado de participación individual.",
];

const rol2Requisitos = [
  "Participación mediante ponencias tipo conferencia.",
  "Cada ponencia dispondrá de 30 minutos de exposición + 15 minutos para preguntas.",
  "Casos de éxito y experiencias relevantes del sector productivo.",
  "Modalidad: Virtual o Presencial.",
  "Certificado de participación para el ponente.",
];
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}
.cont-flex {
  display: flex;
  flex-direction: row;
  gap: 36px;
}
.roles-section {
  background-color: var(--background-color);
}
.main-cont {
  display: flex;
  flex-direction: column;
  gap: 72px;
}


.rol {
  /* border-left: 6px solid var(--sec-color); */
}

.rol ul {
  padding-left: 32px;
  list-style-type: disc;
  margin-bottom: 16px;
}

.roles-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}

.rol {
  flex: 1 1 400px;
  background-color: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 0 10px #ccc;
}
</style>
