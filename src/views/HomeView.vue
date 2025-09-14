<script setup>
import { ref, onMounted } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import Hero from "../components/Hero.vue";
import AboutUs from "../components/AboutUs.vue";
import Lema from "../components/GeneralComponents/Lema.vue";
import ResearchSectionMain from '../components/ResearchSection/ResearchSectionMain.vue';
import ProyectsSection from '../components/ProyectsSection/ProyectsSection.vue';
import Members from '../components/Members/Members.vue';
import Public from '../components/Public.vue';
import RobotThreejs from '../components/GeneralComponents/robotThreejs.vue';
import Robot3D from '../components/GeneralComponents/Robot3D.vue';

const sesionesFuturas = ref([]);

onMounted(() => {
  sesionesFuturas.value = JSON.parse(localStorage.getItem("sesionesFuturas") || "[]");
});

const items = [
  { id: 1, img: 'https://picsum.photos/seed/1/400/600', name: 'Miembro 1' },
  { id: 2, img: 'https://picsum.photos/seed/2/400/600', name: 'Miembro 2' },
  { id: 3, img: 'https://picsum.photos/seed/3/400/600', name: 'Miembro 3' },
  { id: 4, img: 'https://picsum.photos/seed/4/400/600', name: 'Miembro 4' },
  { id: 5, img: 'https://picsum.photos/seed/5/400/600', name: 'Miembro 5' },
]
</script>

<template>
  <div>
    <Hero id="hero" />
    <div class="space"></div>
    <div class="margin">
      <!-- ! <Sesions />  ver por que no funciona-->
      <!--! <Robot3D /> ver pq ya no funciona -->
      <!-- !<Public/>  Sacar la card como secondary card -->
      <AboutUs />
      <!-- ** <div class="space" id="cronograma"></div> -->
    </div>
    <div class="space"></div>

    <div class="margin">
      <ResearchSectionMain />
    </div>
    <div class="space"></div>
    <Lema />
    <Rols />
    <div class="margin">
      <ProyectsSection />
    </div>
    <div class="space" id="mesaRedonda"></div>
    <Members />


    <!-- <div style="max-width:900px;margin:auto;">
      <Carousel :items-to-show="3" :wrap-around="true" :transition="500" :gap="20">
        <Slide v-for="item in items" :key="item.id">
          <div class="card">
            <img :src="item.img" :alt="item.name" />
            <p>{{ item.name }}</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
</Carousel>
</div> -->
    <div class="space" id="contactos"></div>
    <Contacts />
    <div class="space" id="ubicacion"></div>
    <div class="margin">
    </div>
    <div class="space"></div>

  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #111;
  color: #fff;
}

.card img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card p {
  position: relative;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  padding: 4px 12px;
  border-radius: 8px;
  margin: 8px;
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
