<script>
export default {
  name: "PlayButton",
  methods: {
    play() {
      console.log("funciono");
      new Audio(this.audio).play();
    },
  },
  props: {
    audio: String
  }
};
</script>

<template>
  <div>
    <h1>COMPONENTE BOTONCITO</h1>
    <button type="button" class="botoncitoPlay" @click="play">
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
