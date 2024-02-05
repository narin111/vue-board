<!-- Home.vue -->

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const message = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/api/hello'); // "/api" 접두사 추가
    console.log(response)
    if (response.ok) {
      message.value = await response.text();
    } else {
      console.error('Failed to fetch data:', response.statusText);
      message.value = 'Error fetching data';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    message.value = 'Error fetching data';
  }
});
</script>
