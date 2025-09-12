<template>
  <div>
    <nav class="navbar">
      <div class="navbar-content ">
        <!-- logo-->
        <div class="logo-container desktop-only">
          <a @click.prevent="scrollToHero" @click="router.push('/')">
            <img src="/src/assets/img/logos/logo fondo azul.jpg" alt="Logo UACJ" class="logo-img" />
          </a>
        </div>

        <!--menu desktop -->
        <div class="nav-links desktop-nav">
          <NavButton v-for="option in navOptions" :key="option.id" :option="option" @click="handleNavClick" />
        </div>

        <!--menu mobil -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span :class="{ 'rotate-45': mobileMenuOpen }"></span>
          <span :class="{ 'opacity-0': mobileMenuOpen }"></span>
          <span :class="{ 'rotate-minus-45': mobileMenuOpen }"></span>
        </button>
        <div class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
          <NavButton v-for="option in navOptions" :key="`mobile-${option.id}`" :option="option" :is-mobile="true"
            @click="handleMobileNavClick" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NavButton from "./NavButton.vue";

const mobileMenuOpen = ref(false);

const navOptions = ref([
  { id: 'cronograma', label: 'Sesiones de estudio de investigacion', section: 'cronograma' },
  { id: 'contactos', label: 'Temas de investigacion', section: 'contactos' },
  { id: 'contactos', label: 'Proyectos comerciales', section: 'contactos' },
  { id: 'mesaRedonda', label: 'Tecnologias', section: 'mesaRedonda' },
  { id: 'publico', label: 'Miembros', section: 'publico' },
]);
const scrollToHero = () => {
  const section = document.getElementById('hero')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

const scrollToSection = (section) => {
  const el = document.getElementById(section);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const handleNavClick = (option) => {
  scrollToSection(option.section);
};

const handleMobileNavClick = (option) => {
  closeMobileMenu();
  scrollToSection(option.section);
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: var(--main-color);
  padding: 1rem 2rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 8px 0;

}

.navbar-content {
  margin: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

/* Logo solo escritorio */
.logo-container {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 60px;
  width: auto;
}

/* Menu escritorio */
.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

/* Botón menú móvil */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding: 0 5%;
  z-index: 2;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--sec-color);
  margin: 3px 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  transform-origin: center;
}

.rotate-45 {
  transform: rotate(45deg) translate(6px, 6px);
}

.opacity-0 {
  opacity: 0;
  transform: scale(0);
}

.rotate-minus-45 {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Menú móvil */
.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  padding: 1.5rem;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-top: none;
  transform: translateY(-10px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-nav-open {
  display: block;
  transform: translateY(0);
  opacity: 1;
}

/* Responsive */
@media (max-width: 1200px) {

  .desktop-nav,
  .desktop-only {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
