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
      cardTitle="Chihuahua"
      img="https://i.pinimg.com/474x/b0/25/e4/b025e4e9bd8cc3c80857a645de312bba--smile-dental-dental-care.jpg"
      alt="chiwawa"
      description="El chihuahua​ o chihuahueño​ es una raza de perro originaria de México. Es una de las razas de perros más antiguas del continente americano, además de ser el perro más pequeño del mundo. El perro chihuahua es originario del estado de Chihuahua."
    ></Card>
  </div>
  <Footer />
</template>

<style>
.content {
  min-height: 100vh;
}

* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
