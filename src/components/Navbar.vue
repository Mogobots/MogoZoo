<template>
  <nav>
    <div class="logo">
      <img src="../assets/gato.jpg" alt="logo" />
      <h2>Mogozoo</h2>
    </div>
    <input type="text" class="searchTerm" placeholder="What animal do you want to see?" />
    <aside>
      <a href="#">Animals</a>
      <a href="#">Your pet</a>
      <a href="#">Your zoo</a>
      <a href="#">Contact</a>
    </aside>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(12, 194, 97);
  font-weight: bold;
  position: relative;
  box-shadow: 1.4px 2.1px 4px rgb(166, 166, 166);
}
.logo {
  position: relative;
  margin-right: 10px;
}
img {
  width: 60px;
  border-radius: 50%;
  margin-left: 5px;
}

h2 {
  position: absolute;
  margin-top: -50px;
  margin-left: 64px;
  color: rgb(15, 101, 2);
  text-shadow: 1.4px 2.1px 4px rgb(255, 255, 255);
}

a {
  margin: 5px;
  text-decoration: none;
  padding: 10px;
  font-size: 20px;
  background-color: white;
  color: rgb(12, 194, 97);
  border-radius: 10px;
  margin: 10px;
  &:hover {
    color: rgb(12, 194, 97);
    transition: filter 0.2s;
    filter: brightness(90%);
  }
  &:active {
    transition: filter 0.2s;
    filter: brightness(80%);
  }
}

input {
  height: 35px;
  width: 400px;
  border-radius: 10px 0px 0px 10px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.034);
  color: white;
  font-weight: bold;
  font-size: 20px;
  border: none;
  box-shadow: 1.4px 2.1px 4px rgb(2, 103, 7);
}
</style>
