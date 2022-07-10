<script setup></script>

<template>
  <nav class="topnav">
    <a href="#" class="logo">
      <img height="50" width="50" src="../assets/logo.png" />
      Mogozoo
    </a>

    <div class="menu">
      <a href="#">Animals</a>
      <a href="#">Your pet</a>
      <a href="#">Your Zoo</a>
      <a href="#">Contact</a>
      <input
        type="text"
        class="searchTerm"
        placeholder="Que animal queres ver?"
      />
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.topnav {
  display: flex;
  justify-content: space-between;
  max-width: 980px;
  margin: 0 auto;
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: var(--primary-color);
}

.menu {
  display: flex;
  margin: 0;
  padding: 0;
}

.menu a {
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 50px;
  position: relative;
  padding: 0 0.5rem;
}

.menu a:hover {
  color: var(--primary-color);
}

</style>
