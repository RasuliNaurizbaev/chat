<template>
    <div>
      <h1>Login</h1>
      <form class="form" @submit.prevent="login">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" required />
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import "../assets/style.css";
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:5000/user/login', {
        username: username.value,
        password: password.value
      });
      localStorage.setItem('token', response.data.token);
      router.push('/next');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  </script>

  