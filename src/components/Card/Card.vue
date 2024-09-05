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
      <img :src="show.image.medium" class="img" loading="lazy" alt="show" />
      <div class="rating">
        {{ show.rating.average ? show.rating.average : '--' }}
        <div><Star /></div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  position: relative;
}
.img {
  width: 120px;
  border-radius: 5px;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid white;
  }
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
  .img {
    width: 180px;
  }
}
</style>
