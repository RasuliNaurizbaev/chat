<script setup>
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <nav>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/next">Next</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
  header {
    background-color: #333;
    width: 100%;
    height: 60px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-start-start-radius: 50%;
    border-end-start-radius: 50%; 
  }

  .logo {
    border-radius: 50%;
  }

  nav {
    display: flex;
    gap: 20px;
  }

  nav a {
    color: white;
    text-decoration: none;
  }

  main {
    padding: 20px;
  }
</style>
