<script setup lang="ts">
import Card from '@/components/Card/Card.vue'
import type { TShows } from '@/services/schemas/showsSchemas'

defineProps<{
  genre: string
  shows: TShows
}>()
</script>
<template>
  <h2>{{ genre }}</h2>
  <div class="shows">
    <div class="card" v-for="show in shows" :key="show.id">
      <Card :show="show" />
    </div>
  </div>
</template>

<style scoped>
.shows {
  display: flex;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
}
.shows::-webkit-scrollbar {
  width: 0px;
}
.card {
  position: relative;
  margin: 0 5px;
}
@media (min-width: 768px) {
  .card {
    margin: 0 10px;
  }
}
</style>
