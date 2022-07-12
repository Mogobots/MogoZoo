<template>
  <button class="Button" @click="play">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    audio: String,
  },
  methods: {
    play() {
      console.log("funciono");
      new Audio(this.audio).play();
    },
  },
};
</script>

<style lang="scss" scoped>
.Button {
  background-color: rgba(147, 165, 165, 0.034);
  color: rgb(39, 42, 41);
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  border: 2px solid rgb(92, 89, 89);
  box-shadow: 1.4px 2.1px 4px rgb(95, 93, 93);
  &:hover {
    background-color: black;
    color: aliceblue;
    transition-duration: 810ms;
    border: 2px solid black;
  }
  &:active {
    color: rgb(186, 235, 235);
    transition-duration: 0.1ms;
  }
}
</style>
