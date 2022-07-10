<script setup>
const botonPlay = () => {
  console.log("No hago nada");
};

// export default {
//   name: "PlayButton",
// };
</script>

<template>
  <div>
    <h1>COMPONENTE BOTONCITO</h1>
    <button type="button" class="botoncitoPlay" @click="botonPlay()">
      Play <img alt="Play Icon" id="btnplay" src="../assets/iconplay.png" />
    </button>
  </div>
</template>

<style scoped>
.botoncitoPlay {
  color: orange;
  border: solid 2px black;
}

#btnplay {
  width: 30px;
  height: 30px;
}
</style>
