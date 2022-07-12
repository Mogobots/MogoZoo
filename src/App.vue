<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Card from './components/Card.vue'
import Button from './components/Button.vue'
</script>

<template>
  <Navbar />
  <div class="content">
    <Card
      title="Perro de mierda"
      img="https://i.pinimg.com/474x/b0/25/e4/b025e4e9bd8cc3c80857a645de312bba--smile-dental-dental-care.jpg"
      alt="chiwawa"
      description="El chiwawa es un perro de mierda,es feo,ridiculo,se hace el malo y no caga a nadie,lo pisas y se muere."
    ></Card>
  </div>
  <Footer />
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

.content {
  min-height: 11vh;
}
</style>
