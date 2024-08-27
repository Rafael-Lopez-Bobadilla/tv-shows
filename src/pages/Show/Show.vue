<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShow from './useShow'
const route = useRoute()
const { show } = useShow(route.params.showId as string)
</script>
<template>
  <div class="container">
    <h1>{{ show?.name }}</h1>
    <p v-for="genre in show?.genres" :key="genre">{{ genre }}</p>
  </div>
</template>

<style scoped>
.container {
  margin: 90px 0;
}
</style>
