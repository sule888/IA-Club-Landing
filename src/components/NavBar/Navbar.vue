<template>
  <div>
    <nav class="navbar">
      <div class="navbar-content">
        <!-- Desktop Menu -->
        <div class="nav-links desktop-nav">
          <NavButton
            v-for="option in navOptions"
            :key="option.id"
            :option="option"
            @click="handleNavClick"
          />
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span :class="{ 'rotate-45': mobileMenuOpen }"></span>
          <span :class="{ 'opacity-0': mobileMenuOpen }"></span>
          <span :class="{ 'rotate-minus-45': mobileMenuOpen }"></span>
        </button>

        <!-- Mobile Menu -->
        <div class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
          <NavButton
            v-for="option in navOptions"
            :key="`mobile-${option.id}`"
            :option="option"
            :is-mobile="true"
            @click="handleMobileNavClick"
          />
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
  { id: 'cronograma', label: 'Cronograma', section: 'cronograma' },
  { id: 'contactos', label: 'Contactos', section: 'contactos' },
  { id: 'publico', label: 'Participantes', section: 'publico' },
   { id: 'mesaRedonda', label: 'Temas de mesas redondas', section: 'mesaRedonda' },
  { id: 'ubicacion', label: 'Ubicación', section: 'ubicacion' },
]);

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
  /* background: rgba(255, 255, 255, 0.8); */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.nav-links {
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  padding: 0.5rem;
  z-index: 2;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #333;
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

@media (max-width: 850px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .navbar {
    padding: 1rem;
  }

  .nav-links {
    justify-content: center;
  }
}
</style>