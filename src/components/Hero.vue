<template>
  <div class="hero-container">
    <!-- Navbar -->

    <Navbar/>
    <!-- Hero Content -->
    <div class="hero-content">
      <!-- Left Content -->
      <div class="hero-text">
        <div class="hero-subtitle">CONGRESO INTERNACIONAL</div>
        <h1 class="hero-title blinking-title">FRONTERAS INGENIERÍAS</h1>
        <div class="hero-date">18 y 19 de Agosto 2025 </div>

        <!-- Countdown Timer -->
     <Count/>
      </div>

      <!-- Right Image with Parallax -->
      <div
        class="hero-image-container"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div class="hero-image">
          <img
            src="/src/assets/img/png/hero-img.png"
            alt="Hero Image"
            class="hero-img"
          />

          <!-- Icons floating around image -->
          <div class="icon gear-icon-1">⚙️</div>
          <div class="icon gear-icon-2">🔧</div>
          <div class="icon globe-icon">🌐</div>
          <div class="icon graduation-icon">🎓</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Count from "./Count.vue";
import Navbar from "./Navbar.vue";
// Estado reactivo

</script>

<style scoped>
.hero-container {
  min-height: 100vh;

  position: relative;
  overflow: hidden;
}

/* Hero Content */
.hero-content {
  display: flex;
  min-height: 85vh;
  padding: 8rem 0 4rem;
  max-width: none;
  margin: 0;
  align-items: center;
  gap: 4rem;
  position: relative;
}

.hero-text {
  flex: 1;
  z-index: 100;
  padding: 0 4rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

.hero-title {
  font-size: 68px;
  font-weight: 900;
  color: black;
  line-height: 1.1;
  margin: 1rem 0;
}
.blinking-title {
 animation: blink 3.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero-date {
  font-size: 1.3rem;
  color: var(--main-color);
  font-weight: 600;
  margin: 2rem 0;
}

/* Countdown Styles */


/* Hero Image */
.hero-image-container {
  position: absolute;
  top: -10%;
  right: -15%;
  width: 70%;
  height: 120%;
  z-index: 1;
  opacity: 0.7;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-img {
  width: 150%;
  height: 150%;
  object-fit: cover;
  filter: drop-shadow(0 10px 30px rgba(79, 157, 141, 0.2));
  transform: scale(1.2);
  transform: rotate(22deg);
}

/* Icons */
.icon {
  position: absolute;
  font-size: 2rem;
  opacity: 0.8;
  animation: float 3s ease-in-out infinite;
}

.gear-icon-1 {
  top: 20px;
  right: -30px;
  animation-delay: 0s;
}

.gear-icon-2 {
  bottom: 100px;
  left: -40px;
  animation-delay: 1s;
}

.globe-icon {
  top: 50px;
  left: -50px;
  animation-delay: 2s;
}

.graduation-icon {
  bottom: 50px;
  right: -20px;
  animation-delay: 1.5s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* Responsive Design */
@media (max-width: 1000px) {
  .hero-image-container {
    height: 400px;
  }
}

@media (max-width: 1200px) {
  .hero-content {
    gap: 2rem;
    padding: 6rem 0 2rem;
  }

  .hero-text {
    padding: 0 2rem;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-image-container {
    width: 80%;
    height: 110%;
    right: -20%;
  }

  .countdown-container {
    gap: 1rem;
  }

  .countdown-item {
    min-width: 70px;
    padding: 1rem 0.8rem;
  }

  .countdown-number {
    font-size: 2rem;
  }
}

@media (max-width: 850px) {
  .hero-image-container {
    display: none;
  }

  .countdown-container {
    justify-content: center;
    flex-wrap: wrap;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 6rem 0 2rem;
  }

  .hero-text {
    padding: 0 1.5rem;
  }

  .hero-image-container {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: 300px;
    order: -1;
  }

  .hero-img {
    width: 100%;
    height: 100%;
    transform: rotate(0deg);
  }
}

@media (max-width: 600px) {
  .hero-image-container {
    display: none;
  }

  .hero-img {
    transform: rotate(0deg);
    /* se puede dejar por seguridad */
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .countdown-container {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 550px) {
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

  .hero-content {
    padding: 5rem 0 2rem;
  }

  .hero-text {
    padding: 0 1rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-date {
    font-size: 1.1rem;
  }

  .countdown-item {
    min-width: 60px;
    padding: 0.8rem 0.6rem;
  }

  .countdown-number {
    font-size: 1.8rem;
  }

  .countdown-label {
    font-size: 0.8rem;
  }
}
</style>
