<template>
  <div class="hero-container">
    <!-- Navbar -->

    <Navbar/>
    <!-- Hero Content -->
    <div class="hero-content">
      <!-- Left Content -->
      <div class="hero-text">
        <div class="hero-subtitle subtitles">CONGRESO INTERNACIONAL</div>
        <h1 class="hero-title blinking-title title-hero">FRONTERAS INGENIERÍAS</h1>
        <div class="hero-date subtitles text-main-color">18 y 19 de Septiembre 2025 </div>

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

  
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Count from "./Count.vue";
import Navbar from "./NavBar/Navbar.vue";
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
  min-height: 100vh;
  max-width: none;
  align-items: center;
  position: relative;
}

.hero-text {
  flex: 1;
  z-index: 2;
  padding: 0 5%;
}

.hero-subtitle {
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.hero-title {
  line-height: 1.1;
  margin: 32px 0;
}
.blinking-title {
 animation: blink 3.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero-date {
  margin: 32px 0;
}

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


/* Responsive Design */
@media (max-width: 1200px) {
  .hero-content {
     height: 400px;
    gap: 32px;
  }

  .hero-text {
    padding: 0 5%;
  }
  .hero-image-container {
    width: 70%;
    height: 110%;
    right: -20%;
  }
  

}

@media (max-width: 950px) {
  .hero-image{
    display: none;
  }
  .hero-image-container {
    display: none;
  }

  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 120px 5%;
  }
 .hero-container,
  .hero-content {
    min-height: auto;
    height: auto;
  }
}

@media (max-width: 650px) {
  .hero-image-container {
    display: none;
  }

  .hero-img {
    transform: rotate(0deg);
  }
  .hero-text {
    padding: 0 5%;
  }
   .hero-content {

    padding: 64px 5%;
  }

}


</style>
