<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-col">
        <div class="logos">
          <img
            class="logo"
            src="/src/assets/img/logos/logo uacj.png"
            alt="Logo UACJ"
          />
          <img
            class="logo"
            src="/src/assets/img/logos/logo diim.png"
            alt="Logo DIIM"
          />
        </div>

        <div class="event-info">
          <h3 class="subtitles">CONGRESO INTERNACIONAL<br />FRONTERAS INGENIERÍAS</h3>
          <strong class="normal-text text-sec-color">Investigación para un mundo conectado</strong> 

          <p class="normal-text"><strong>Fecha:</strong> 18 y 19 de Septiembre 2025</p>
        </div>

        <div class="quick-links">
          <a class=" text-main-color normal-text link" href="#" @click.prevent>Descargar estructura del resumen (PDF)</a>
          <a class=" text-main-color normal-text link" href="#" @click.prevent>Llenar formato de registro (PDF)</a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="subtitles">Contactos </h4>
        <ul class="contacts">
          <li class="contact">
            <p class="normal-text"><strong>Organizadora:</strong> <br> Dra. Manuela Alejandra Zalapa Garibay  -  Coordinadora de la Carrera de Ingeniería Mecánica</p>
            <p class="contact-role normal-text"></p>
            <a class="email normal-text text-main-color" href="mailto:manuela.zalapa@uacj.mx">manuela.zalapa@uacj.mx</a>
          </li>
        </ul>

        <a class="link normal-text text-main-color" @click="() => scrollToSection('contactos')" style="margin-top: 16px;">
          Ir a la sección de contactos
        </a>
      </div>

      <div class="footer-col">
        <h4 class="subtitles ">Síguenos</h4>
        <div class="socials">
          <a
            class="text-main-color normal-text link"
            href="https://www.facebook.com/somosuacj/"
            target="_blank"
            rel="noopener"
            aria-label="Facebook UACJ"
          >
            Facebook UACJ
          </a>
        </div>

        <div class="extras">
          <p class="normal-text light">
            © {{ new Date().getFullYear() }} UACJ · Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>

    <div class="footer-bottom"></div>
  </footer>
</template>

<script setup>
const scrollToSection = (section) => {
  const el = document.getElementById(section);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
.footer {
  background: #fff;
  border-top: 1px solid rgba(0,0,0,0.08);
}

.footer-inner {
    margin: 5%;
  display: grid;
  grid-template-columns: 1.2fr 1fr 0.8fr;
  gap: 32px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.logos {
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  justify-content: flex-start; 
  gap: 16px;
}
.logo {
  height: 56px;
  width: auto;
  object-fit: contain;
}
.quick-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}
.contacts {
  list-style: none;
}
.socials {
  display: flex;
  gap: 12px;
}

.extras .light {
  opacity: 0.8;
}

.footer-bottom {
  height: 12px;
  background: var(--background-color);
  margin-top: 24px;
}

/* Responsive */
@media (max-width: 1200px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 650px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 16px;
  }
  .logo {
    height: 48px;
  }
  .event-info .event-title {
    font-size: 20px;
  }
}
</style>
