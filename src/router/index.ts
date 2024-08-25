import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShowView from '@/views/ShowView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/shows/:showId',
      name: 'show',
      component: ShowView
    }
  ]
})

export default router
