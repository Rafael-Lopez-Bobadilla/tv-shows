<script setup lang="ts">
import showsStore from '@/stores/showsStore'
import useOrderedShows from './useOrderedShows'
import ShowsList from './ShowsList/ShowsList.vue'

if (!showsStore.shows) showsStore.fetchData()
const { orderedShows } = useOrderedShows()
</script>
<template>
  <div class="container">
    <h1>TV Shows</h1>
    <h2 v-if="showsStore.loading">Loading...</h2>
    <ShowsList v-for="[genre, shows] in orderedShows" :key="genre" :genre="genre" :shows="shows" />
  </div>
</template>

<style scoped>
.container {
  margin: 100px 10px;
}
.container > h1 {
  margin: 50px 0;
  text-align: center;
}
@media (min-width: 768px) {
  .container {
    margin: 100px 20px;
  }
}
</style>
