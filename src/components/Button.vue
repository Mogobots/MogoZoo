<template>
  <button class="Button" @click="play">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    audio: String
  },
  methods: {
    play() {
      console.log('funciono')
      new Audio(this.audio).play()
    }
  }
}
</script>

<style lang="scss" scoped>
.Button {
  background: linear-gradient(220.55deg, #eaeaea 0%, #8b8b8b 100%);
  color: rgb(39, 42, 41);
  font-weight: bold;
  font-size: 17px;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  box-shadow: 1.4px 2.1px 4px rgb(95, 93, 93);
  &:hover {
    background: linear-gradient(220.55deg, #565656 0%, #181818 100%);
    color: rgb(216, 218, 220);
    transition-duration: 810ms;
  }
  &:active {
    color: white;
    transition-duration: 0.1ms;
  }
}
</style>
