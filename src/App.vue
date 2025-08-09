<script setup>
import Contacts from "./components/Contacts.vue";
import Axes from "./components/Axes.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Information from "./components/Information.vue";
import Lema from "./components/Lema.vue";
import RoundTables from "./components/RoundTables.vue";
import Public  from "./components/Public.vue";
import Rols from "./components/Rols.vue";
import Schedule from "./components/Schedule.vue";
import UbcationSchedule from "./components/UbcationSchedule.vue";
</script>

<template>
  <div>
    <Hero id="hero" />
    <div class="space"></div>
    <div class="margin">
      <Information />
      <div class="space" id="cronograma"></div>
      <Schedule />
    </div>
    <div class="space"></div>
    <Axes />
    <div class="space"></div>
    <div class="margin">
      <Public  />
      <div class="space" id="publico"></div>
      <Rols  />
    </div>
    <div class="space"></div>
    <Lema />
    <div class="space" id="mesaRedonda" ></div>
    <div class="margin">
      <RoundTables />
    </div>
    <div class="space" id="contactos" ></div>
    <Contacts  />

    <div class="space" id="ubicacion" ></div>
    <div class="margin">
      <UbcationSchedule />
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
  height: 128px;
}

@media (max-width: 950px) {
  .space {
    height: 120px;
  }
}
</style>
