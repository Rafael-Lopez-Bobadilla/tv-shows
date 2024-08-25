<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/search">Search</RouterLink>
    <RouterLink to="/shows/someid">Show</RouterLink>
  </nav>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  background-color: rgb(12, 34, 136);
  color: white;
  font-family: 'Inter';
}
a {
  text-decoration: none;
  color: inherit;
}
@font-face {
  font-family: 'Inter';
  src: url('./assets/fonts/Inter-VariableFont_slnt,wght.ttf');
}
</style>
