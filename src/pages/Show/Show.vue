<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShow from './useShow'
const route = useRoute()
const { show, loading } = useShow(route.params.showId as string)
</script>
<template>
  <h1 v-if="loading">Loading...</h1>
  <main class="container" v-if="show">
    <img class="img" :src="show.image.original" />
    <div class="info">
      <h1>{{ show.name }}</h1>
      <p>{{ show.summary.replace(/<\/?(p|b)\b[^>]*>/g, '') }}</p>
      <p>
        Genres:
        <ul><li v-for="genre in show.genres" :key="genre">{{ ` ${genre}` }}</li></ul>
      </p>
      <p v-if="show.network">Network: {{ show.network.name }}</p>
      <p v-if="show.rating.average">Average Rating: {{ show.rating.average }}</p>
    </div>
  </main>
</template>

<style scoped>
.container {
  margin: 100px auto;
  max-width: 1200px;
}
.img {
  width: 300px;
  border-radius: 10px;
}
.info {
  margin: 20px 0 0 0;
  max-width: 700px;
}
.info > p {
  font-size: 18px;
}

@media (min-width: 768px) {
  .container {
    display: flex;
  }
  .info {
    margin: 0 0 0 30px;
  }
}
</style>
