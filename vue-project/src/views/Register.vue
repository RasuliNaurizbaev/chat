<template>
    <div>
      <h1>Register</h1>
      <form class="form" @submit.prevent="register">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" required />
        <label for="lastname">Last Name</label>
        <input v-model="lastname" type="text" id="lastname" required />
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
        <button type="submit" :disabled="loading">{{ loading ? 'Registering...' : 'Register' }}</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import "../assets/style.css";
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const lastname = ref('');
  const password = ref('');
  const loading = ref(false);
  const errorMessage = ref('');
  
  const register = async () => {
    if (!username.value || !lastname.value || !password.value) {
      errorMessage.value = "All fields are required.";
      return;
    }
    
    loading.value = true;
    errorMessage.value = '';
    
    try {
      console.log("Sending registration request with:", {
        username: username.value,
        lastname: lastname.value,
        password: password.value
      });
      
      const register = async () => {
  try {
    console.log("Отправка запроса на сервер...");
    const response = await axios.post('http://127.0.0.1:5000/user/', {
      username: username.value,
      lastname: lastname.value,
      password: password.value
    });
    console.log("Ответ от сервера:", response.data);
    router.push('/next'); 
  } catch (error) {
    console.error("Ошибка запроса:", error);
    errorMessage.value = error.response?.data?.message || 'Ошибка регистрации.';
  }
};
      
      await register();
    } catch (error) {
      console.error('Registration failed:', error);
      errorMessage.value = error.response?.data?.message || 'Registration failed.';
    } finally {
      loading.value = false;
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
