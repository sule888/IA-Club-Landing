<template>
  <div class="hero-container">
    <Navbar />
    <div class="hero-content">
      <div class="hero-image-container" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
        <div class="hero-image">
          <img src="../assets/img/png/hero.png" alt="Hero Image" class="hero-img" />
        </div>
      </div>
      <div class="hero-text">
        <h1 class="hero-title blinking-title title-hero">
          AI Researchers & Engineers Club
        </h1>
        <div class="hero-subtitle subtitles text-sec-color">Ciudad Juárez</div>
        <div class="cont-btns">
          <MainButton btnTitle="Informacion del club" buttonType="main" />
          <MainButton btnTitle="Equipos de trabajo" buttonType="main" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "./NavBar/Navbar.vue";
import MainButton from "./GeneralComponents/MainButton.vue";
</script>

<style scoped>
.hero-container {
  position: relative;
  overflow: hidden;
}

.hero-content {
  display: flex;
  min-height: 120vh;
  align-items: center;
  justify-content: space-between;
}

.hero-image-container {
  flex: 1;
  position: relative;
  top: auto;
  right: auto;
  width: 100%;
  height: auto;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
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
  transform: rotate(12deg);
}

.hero-text {
  flex: .9;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  animation: blink 4.5s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

.cont-btns {
  display: flex;
  gap: 16px;
}

@media (max-width: 1200px) {


  .hero-content {
    min-height: 60vh;
  }

  .hero-content {
    height: 400px;
    gap: 32px;
  }

  .hero-image {
    height: 80%;

  }

  .hero-text {
    padding: 0 5%;
  }

  .hero-image-container {
    width: 100%;
    height: 50%;
  }

  .hero-text {
    margin-top: 0px;
  }


}

@media (max-width: 950px) {
  .hero-image {
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

  .cont-btns {
    justify-content: center;
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

  .hero-text {
    margin-top: 54px;
  }
}
</style>
