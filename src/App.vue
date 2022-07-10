<script setup>
import ButtonVue from "./components/Button.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar />
  <div class="content"></div>
  <Footer />
</template>

<style>
.content {
  min-height: 100vh;
}
</style>
