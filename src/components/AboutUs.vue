<template>
  <div class="information-cont">
    <div class="cont-titulo-texto">
      <div class="info-title titles">Quienes somos</div>
      <div class="main-divider"></div>
      <div class="info-item normal-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex
        quisquam dolorum omnis laudantium culpa, veritatis commodi repudiandae
        quod? Dolores beatae aspernatur minus quibusdam earum, atque laudantium
        possimus rerum ea suscipit ratione temporibus! Unde consequuntur dolores
        repudiandae deleniti molestias, totam eveniet minima possimus ipsam.
        Maxime iste veniam cumque illo deleniti!
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        placeat, ut dicta unde ullam cum blanditiis laborum dignissimos tempora
        similique, rem quidem. Optio illum incidunt, rerum natus ab deleniti
        ullam iure at est. Sequi totam recusandae veritatis laudantium, facilis
        itaque aliquid sapiente nobis tempora? Iste eum beatae aperiam? Quaerat
        similique ullam sunt, tempore quas esse harum minima qui quia officiis.
      </div>
    </div>
    <div class="cont-cards">
      <MainCard v-for="(item, index) in presentationItems" ::key="index" :titleCard="item.title" :icon="item.icon"
        :info="item.info">
      </MainCard>

    </div>
  </div>
</template>

<script setup>
import { Microscope, Briefcase, Bug } from "lucide-vue-next";
import MainCard from "./GeneralComponents/MainCard.vue";

const presentationItems = [
  {
    title: 'Investigacion',
    icon: Microscope,
    info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iste vitae deserunt, minus mollitia odit Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente inventore, corrupti earum officiis, similique asperiore.debitis.'
  },
  {
    title: 'Desarrollo Tecnologico',
    icon: Briefcase,
    info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iste vitae deserunt, minus mollitia odit Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente inventore, corrupti earum officiis, similique asperiore.debitis.'
  }, {
    title: 'Investigacion para promover el desarrollo',
    icon: Bug,
    info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia iste vitae deserunt, minus mollitia odit Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente inventore, corrupti earum officiis, similique asperiore.debitis.'
  }
]
</script>

<style scoped>
.information-cont {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.cont-titulo-texto {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.info-title {
  white-space: nowrap;
  margin-right: 16px;
  text-align: center;
}

.cont-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  flex: 1;
  width: 100%;
}

.info-text {
  flex: 1;
}

@media (max-width: 950px) {
  .information-cont {
    flex-direction: column;
    align-items: center;
  }

  .info-title {
    margin-right: 0;
    margin-bottom: 16px;
    white-space: normal;
  }

  .info-text {
    width: 100%;
  }
}
</style>
