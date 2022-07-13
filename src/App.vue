<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'
import Button from './components/Button.vue'
import axios from 'axios'

export default {
  components: { Navbar, Footer, Card, Button },
  data() {
    return {
      animals: []
    }
  },
  beforeMount() {
    axios('https://mogozoo.herokuapp.com/animals')
      .then(({ data }) => {
        this.animals = data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<template>
  <Navbar />
  <div class="content">
    <Card
      v-for="animal in animals"
      :key="animal.id"
      :title="animal.name"
      :img="animal.img"
      alt="chiwawa"
      :description="animal.content"
    />
  </div>
  <Footer />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  min-height: 11vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100vw;
  margin: 0 auto;
  &__card {
  }
}

.cards-container {
  width: 100%;
}
</style>
