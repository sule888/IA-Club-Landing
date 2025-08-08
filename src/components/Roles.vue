<template>
  <section class="roles-section">
    <div class="intro">
      <h2>Roles de Participación</h2>
      <p>
        Este evento contempla dos tipos de participación principales: por un lado, estudiantes e investigadores que buscan compartir sus avances en proyectos académicos; y por otro, representantes del sector empresarial que expondrán experiencias y casos de éxito para fomentar el espíritu emprendedor entre los asistentes.
      </p>
    </div>

    <!-- Rol 1: Alumnos e Investigadores -->
     <div class="cont-flex"> <div class="rol rol-1" data-aos="fade-right">
      <h3>Investigadores para la Sociedad del Conocimiento</h3>
      <p>
        Este espacio está dirigido a alumnos (licenciatura y posgrado) y docentes investigadores que deseen exponer sus proyectos en formato virtual o presencial. Las ponencias tendrán una duración de 15 a 20 minutos, según corresponda.
      </p>
      <ul>
        <li>Enviar resumen del proyecto en el formato oficial del evento.</li>
        <li>Los resúmenes serán publicados en las memorias del congreso.</li>
        <li>Registro obligatorio con los datos de 3 posibles asistentes.</li>
        <li>Modalidad: Virtual o Presencial.</li>
        <li>Se notificará la aprobación por medio del correo institucional.</li>
        <li>Certificado de participación individual.</li>
      </ul>
      <a class="link" href="/docs/estructura_resumen_investigacion.pdf" target="_blank">Descargar estructura del resumen (PDF)</a>
      <a class="link" href="/docs/formato_registro_investigadores.pdf" target="_blank">Llenar formato de registro (PDF)</a>
    </div>

    <!-- Rol 2: Empresarios -->
    <div class="rol rol-2" data-aos="fade-left">
      <h3>Relacionamiento con el Sector Empresarial</h3>
      <p>
        Invitamos a empresarios y representantes de gremios industriales a compartir casos de éxito reales, con el fin de acercar a los asistentes a la realidad del entorno empresarial y fortalecer el espíritu emprendedor.
      </p>
      <ul>
        <li>Participación mediante ponencias tipo conferencia.</li>
        <li>Cada ponencia dispondrá de 30 minutos de exposición + 15 minutos para preguntas.</li>
        <li>Casos de éxito y experiencias relevantes del sector productivo.</li>
        <li>Modalidad: Virtual o Presencial.</li>
        <li>Certificado de participación para el ponente.</li>
      </ul>
    </div></div>
   
  </section>
</template>

<script setup>
</script>

<style scoped>
.cont-flex{
    display: flex;
    flex-direction: row;
    gap: 36px;
}
.roles-section {
  background-color: var(--background-color);

}

.intro {
  text-align: center;
  margin-bottom: 2rem;
}

.intro h2 {
  color: var(--main-color);
  font-size: 2rem;
}

.rol {
  background-color: white;
  border-left: 6px solid var(--sec-color);
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.rol h3 {
  color: var(--main-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.rol ul {
  padding-left: 1.5rem;
  list-style-type: disc;
  margin-bottom: 1rem;
}

.rol .link {
  display: inline-block;
  margin-top: 0.5rem;
  color: var(--sec-color);
  font-weight: 600;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .roles-section {
    padding: 1rem;
  }

  .rol h3 {
    font-size: 1.2rem;
  }

  .intro h2 {
    font-size: 1.5rem;
  }
}
</style>
