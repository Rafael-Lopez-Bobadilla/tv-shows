<script setup lang="ts">
import Card from '@/components/Card/Card.vue'
import { ref } from 'vue'
import useMatchedShows from './useMatchedShows'
const text = ref('')
const { matchedShows } = useMatchedShows(text)
</script>
<template>
  <div class="container">
    <input placeholder="Find Shows" v-model="text" />
    <div class="cards">
      <div class="card" v-for="show in matchedShows" :key="show.id">
        <Card :show="show" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1300px;
  margin: 80px auto;
  padding: 0 5px;
}
.container > input {
  background-color: rgb(40, 46, 58);
  color: white;
  font-size: 20px;
  width: 100%;
  padding: 15px 40px;
  border: none;
  border-radius: 20px;
}
::placeholder {
  color: rgb(199, 189, 189);
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder {
  /* Edge 12 -18 */
  color: rgb(199, 189, 189);
}
.cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
}

.card {
  margin: 10px;
  position: relative;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
