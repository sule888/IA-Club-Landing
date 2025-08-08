<script setup>
import Contacts from "./components/Contacts.vue";
import Cronograma from "./components/Cronograma.vue";
import Ejes from "./components/Ejes.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Information from "./components/Information.vue";
import Lema from "./components/Lema.vue";
import Publico from "./components/Publico.vue";
import Robot3D from "./components/Robot3D.vue";
import UbicacionHorario from "./components/UbicacionHorario.vue";
</script>

<template>
  <div>
    <Hero />
    <div class="margin">
      <Information />
    </div>
    <Ejes />
    <div class="space"></div>
    <Lema />
  <div class="space"></div>

   <div class="margin"> <Publico/></div>
    <!-- <Robot3D width="700px" /> -->
    <div class="space"></div>
    <Contacts id="cronograma" />
  <div class="space"></div>

    <div class="margin">
      <UbicacionHorario />
    </div>
  <div class="space"></div>
    <Footer />
    
  </div>
</template>

<style scoped>
.margin {
  margin: 0 5%;
}

.space {
  height: 200px;
}

html {
  scroll-behavior: smooth;
}
</style>
