<template>
  <div class="card">
    <h2>{{ cardTitle }}</h2>
    <img :src="img" :alt="name" />
    <p>{{ description }}</p>
    <Button
      text="Play"
      audio="
http://www.sonidosmp3gratis.com/sounds/ANIMALDOGPOMERANIAN_6003_50.mp3"
    ></Button>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'Card',
  props: {
    cardTitle: String,
    description: String,
    img: String,
    name: String
  },
  components: { Button }
}
</script>

<style scoped>
.card {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  background:linear-gradient(220.55deg, #EAEAEA 0%, #8B8B8B 100%);
  width: 200px;
  margin: 10px;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  padding-bottom: 10px;
  cursor: pointer;
  box-shadow: 1.4px 2.1px 4px rgb(118, 116, 116);
}

h2 {
  margin: 40px 0 0;
  color: rgb(6, 6, 6);
  margin: 5px;
  font-size: 26px;
}

img {
  width: auto;
  max-height: 200px;
}

p {
  font-weight: bold;
  margin-top: 1px;
  color: rgb(23, 24, 24);
}
</style>
