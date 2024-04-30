<!-- Home.vue -->

<template>
  <!-- <div>
    <h1>{{ message }}</h1>
  </div> -->
  <div><h1>홈화면</h1></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const message = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/hello');
    console.log(response.data);
    message.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    message.value = 'Error fetching data';
  }
});
</script>
