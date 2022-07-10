<template>
  <button class="Button" @click="saludar">{{ text }}</button>
</template>

<script>
import { sounds } from '../api'
export default {
  name: 'Button',
  props: {
    text: String
  },
  methods: {
    saludar() {
      console.log('pau no te enojes')
      console.log(sounds.get('dog'))
      new Audio(sounds.get('dog')).play()
    }
  }
}
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
