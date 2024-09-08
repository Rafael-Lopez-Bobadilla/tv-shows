<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShow from './useShow'
const route = useRoute()
const { show, loading } = useShow(route.params.showId as string)
</script>
<template>
  <div class="container">
  <h1 v-if="loading">Loading...</h1>
  <main class="main" v-if="show">
    <div><img class="img" :src="show.image?.original" /></div>
    <div class="info">
      <h1>{{ show.name }}</h1>
      <p>{{ show.summary?.replace(/<\/?(p|b|br|i)\b[^>]*>/g, '') }}</p>
      <p>
        Genres:
        <ul><li v-for="genre in show.genres" :key="genre">{{ ` ${genre}` }}</li></ul>
      </p>
      <p v-if="show.network">Network: {{ show.network.name }}</p>
      <p v-if="show.rating.average">Average Rating: {{ show.rating.average }}</p>
    </div>
  </main>
  </div>
</template>

<style scoped>
.container {
  margin: 100px auto;
  max-width: 1200px;
  padding: 0 20px
}
.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img {
  max-width: 250px;
  margin: 0 auto;
  border-radius: 10px;
}
.info {
  margin: 10px 0;
  max-width: 90%;
}

@media (min-width: 768px) {
  .main{
    flex-direction: row;
    justify-content: center;
  }
  .img{
    max-width: 280px;
  }
  .info{
    margin-left: 30px;
    max-width: 70%;
  }
}
@media(min-width: 1000px){
  .img{
    max-width: 300px;
  }
  .info{
    max-width: 650px
  }
}
</style>
