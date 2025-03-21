<template>
    <div>
      <h1>Chat</h1>
      <div class="messages">
        <p v-for="(msg, index) in messages" :key="index">
          <strong>{{ msg.username }}:</strong> {{ msg.text }}
        </p>
      </div>
      <input v-model="newMessage" placeholder="Type a message..." @keydown.enter="sendMessage" />
      <button @click="sendMessage">Send</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const messages = ref([]);
  const newMessage = ref('');
  
  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/message');
      messages.value = response.data;
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    }
  };
  
  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:5000/message', {
        text: newMessage.value,
        user_id: 1 // Replace with actual user ID
      });
      newMessage.value = '';
      fetchMessages();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };
  
  onMounted(fetchMessages);
  </script>
  

  <style scoped>
.chat-container {
  width: 95%;
}
.messages {
  margin-top: 5rem;
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}
.reply {
  color: gray;
  font-size: 0.9em;
}
.replying {
  font-weight: bold;
  color: blue;
}
textarea {
  width: 100%;
  padding: 15px;
  height: 50px;
}
button {
  padding: 15px;
  margin-left: 5px;
}
</style>