<script setup lang="ts">
const routes = [
  { path: '/', name: 'Home' },
  { path: '/search', name: 'Search' }
]
</script>

<template>
  <nav class="nav">
    <RouterLink v-for="route in routes" :to="route.path" :key="route.name">
      <span class="link" :class="$route.fullPath === route.path ? 'active' : ''">
        {{ route.name }}
      </span>
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  width: 100%;
  background-color: rgb(0 0 0/70%);
  font-size: 18px;
  text-align: center;
  padding: 20px 5px;
  position: fixed;
  z-index: 2;
  top: 0;
}

.nav > a {
  margin: 0 15px;
  font-weight: bold;
}
.link {
  opacity: 0.6;
  padding: 5px 0;
  &:hover {
    opacity: 1;
  }
}
.link.active {
  opacity: 1;
  border-bottom: 2px solid white;
}
</style>
