<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import PlayButton from "./components/PlayButton.vue";

const botonPlay = () => {
  console.log("No hago nada");
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <PlayButton msg="asd" />

  <button type="button" class="botoncitoPlay" @click="botonPlay()">
    Play <img alt="Play Icon" id="btnplay" src="./assets/iconplay.png" />
  </button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#btnplay {
  width: 30px;
  height: 30px;
}
</style>
