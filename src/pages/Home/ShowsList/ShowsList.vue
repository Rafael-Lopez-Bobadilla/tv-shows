<script setup lang="ts">
import Card from '@/components/Card/Card.vue'
import type { TShows } from '@/services/schemas/showsSchemas'
import Left from '@/components/icons/Left.vue'
import Right from '@/components/icons/Right.vue'
import { ref } from 'vue'
defineProps<{
  genre: string
  shows: TShows
}>()
const list = ref<HTMLDivElement | null>(null)
const moveList = (direction: 'left' | 'right') => {
  const listWidth = list.value?.clientWidth
  const cardWidth = list.value?.firstElementChild?.clientWidth
  if (!listWidth || !cardWidth) return
  const scroll = Math.floor(listWidth / cardWidth) - 1
  if (direction === 'right') list.value?.scrollBy(scroll * cardWidth, 0)
  if (direction === 'left') list.value?.scrollBy(-scroll * cardWidth, 0)
}
</script>
<template>
  <h2>{{ genre }}</h2>
  <div class="container">
    <div class="arrow left" @click="moveList('left')"><Left /></div>
    <div class="shows" ref="list">
      <div class="card" v-for="show in shows" :key="show.id">
        <Card :show="show" />
      </div>
    </div>
    <div class="arrow right" @click="moveList('right')"><Right /></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
}
.shows {
  display: flex;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.shows::-webkit-scrollbar {
  width: 0px;
}
.card {
  margin: 0 5px;
}
.arrow {
  display: flex;
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  align-items: center;
  position: absolute;
  z-index: 2;
  background-color: black;
  opacity: 0.7;
  cursor: pointer;
  display: none;
  &:hover {
    opacity: 1;
  }
}
.arrow.left {
  left: 15px;
}
.arrow.right {
  right: 0;
  transform: rotateZ('180deg');
}
@media (min-width: 768px) {
  .card {
    margin: 0 10px;
  }
  .arrow {
    display: flex;
  }
}
</style>
