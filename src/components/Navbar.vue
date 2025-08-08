<template>
  <div>
    <nav class="navbar">
      <div class="navbar-content">
        <!-- Desktop Menu -->
        <div class="nav-links desktop-nav">
          <a @click="scrollToSection('cronograma')" class="nav-link">Cronograma</a>
          <a @click="scrollToSection('informacion')" class="nav-link">Información</a>
          <a @click="scrollToSection('cronograma')" class="nav-link">Ponentes</a>
          <a @click="scrollToSection('cronograma')" class="nav-link">Ubicación</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobile Menu -->
        <div class="mobile-nav" :class="{ 'mobile-nav-open': mobileMenuOpen }">
          <a class="mobile-nav-link" @click="
            () => {
              closeMobileMenu();
              scrollToSection('cronograma');
            }
          ">
            Cronograma
          </a>

          <a class="mobile-nav-link" @click="
            () => {
              closeMobileMenu();
              scrollToSection('informacion');
            }
          ">
            Información
          </a>

          <a class="mobile-nav-link" @click="
            () => {
              closeMobileMenu();
              scrollToSection('ponentes');
            }
          ">
            Ponentes
          </a>

          <a class="mobile-nav-link" @click="
            () => {
              closeMobileMenu();
              scrollToSection('ubicacion');
            }
          ">
            Ubicación
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
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
  gap: 3rem;
  width: 100%;
  justify-content: space-evenly;
}

.nav-link {
  position: relative;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  /* asegúrate que no quede fuera del padding */
  width: 0;
  height: 2px;
  background-color: #4f9d8d;
  /* o currentColor si quieres que tome el color del texto */
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile Menu */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: #000;
  margin: 3px 0;
  transition: 0.3s;
}

.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 0 0 15px 15px;
}

.mobile-nav-open {
  display: block;
}

.mobile-nav-link {
  display: block;
  color: #000;
  text-decoration: none;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.mobile-nav-link:hover {
  background: rgba(79, 157, 141, 0.1);
  color: #4f9d8d;
}

@media (max-width: 680px) {
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
