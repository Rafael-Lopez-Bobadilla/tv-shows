<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
@font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/Inter-VariableFont_slnt,wght.ttf');
}

* {
  box-sizing: border-box;
}

body {
  background-color: rgb(6, 6, 39);
  color: white;
  font-family: 'Inter';
  margin: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
