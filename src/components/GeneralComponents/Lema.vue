<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Proyectos de investigacion <br> y comericiales",
  },
});
</script>
<template>
  <section class="full-banner">
    <div class="lines"></div>
    <div class="main-cont">
      <h1 class="titles headline" v-html="title"></h1>
    </div>
    <div class="lines"></div>
  </section>
</template>

<style scoped>
.full-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.headline {
  text-align: center;
  color: #000;
  line-height: 1.3;
}

.lines {
  width: 100%;
  border-top: 3px solid var(--main-color);
}
</style>
