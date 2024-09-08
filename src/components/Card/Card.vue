<script setup lang="ts">
import type { TShow } from '@/services/schemas/showsSchemas'
import Star from '../icons/Star.vue'

defineProps<{
  show: TShow
}>()
</script>
<template>
  <RouterLink :to="`/shows/${show.id}`">
    <div class="card">
      <img
        v-if="show.image?.medium"
        :src="show.image.medium"
        class="img"
        loading="lazy"
        alt="show"
      />
      <div v-else class="noImg">
        <h3>{{ show.name }}</h3>
        <p>No image available for this show</p>
      </div>
      <div class="rating">
        {{ show.rating.average ? show.rating.average : '--' }}
        <div><Star /></div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  background-color: rgb(54, 70, 94);
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 5px;
  width: 120px;
  aspect-ratio: 42/59;
  &:hover {
    border: 2px solid white;
  }
}
.img {
  width: 100%;
}

.noImg {
  text-align: center;
  padding: 0 10px;
}

.rating {
  position: absolute;
  right: 10px;
  bottom: 10px;
  background-color: rgb(0 0 0/80%);
  padding: 3px;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.rating > div {
  width: 20px;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
@media (min-width: 768px) {
  .card {
    width: 180px;
  }
}
</style>
