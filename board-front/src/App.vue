<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <div id="app">
    <!-- 추가된 헤더 컴포넌트 사용 -->
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>