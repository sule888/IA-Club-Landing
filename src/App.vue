<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/NavBar/Navbar.vue";
</script>
<template>

  <div>
    <Navbar />
    <router-view />
    <div style="margin: 300px;"></div>
    <Footer />
  </div>
</template>
