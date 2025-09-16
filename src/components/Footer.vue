<template>
  <footer class="footer">
    <div class="margin">
      <div class="logos">
        <img class="logo" src="/src/assets/img/logos/logo fondo blanco sin fondo.png" alt="Logo UACJ" />
      </div>
      <div class="footer-inner">
        <div class="footer-col">
          <div class="event-info">
            <h3 class="subtitles">IA Researches & Engineers Club</h3>
            <strong class="normal-text text-sec-color">Ciudad Juarez</strong>
          </div>
          <h4 class="subtitles">Síguenos</h4>
          <div class="socials">
            <a class="text-main-color normal-text link" href="https://www.facebook.com" target="_blank" rel="noopener"
              aria-label="Facebook UACJ">
              Facebook IA Researches & Engineers Club
            </a>
            <a class="text-main-color normal-text link" href="https://www.facebook.com" target="_blank" rel="noopener"
              aria-label="Facebook UACJ">
              Linkedin IA Researches & Engineers Club
            </a>
          </div>

          <!-- <div class="extras">
          <p class="normal-text light">
            © {{ new Date().getFullYear() }}
          </p>
        </div> -->
        </div>

        <div class="footer-col">
          <h4 class="subtitles">Quick Links</h4>

          <div style="display: flex; gap: 8px; flex-direction: column">
            <a class="link normal-text text-main-color" @click="scrollToSection(link.scrollTo)"
              v-for="(link, index) in quickLinks" :key="index">
              {{ link.name }}
            </a>

          </div>
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


const quickLinks = [
  { name: 'Investigación', scrollTo: 'investigacion' },
  { name: 'Contenido del club', scrollTo: 'contenido' },
  { name: 'Sesiones', scrollTo: 'sesiones' },
  { name: 'Proyectos de investigación y comerciales', scrollTo: 'proyectos' },
  { name: 'Miembros', scrollTo: 'miembros' },
  { name: 'Tech Stack', scrollTo: 'techstack' },
]
</script>

<style scoped>
.footer {
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding: 32px 0;
}

.footer-inner {
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
  margin-bottom: 16px;
}

.logo {
  height: 70px;
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
