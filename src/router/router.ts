import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home/Home.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/pages/Search/Search.vue')
  },
  {
    path: '/shows/:showId',
    name: 'show',
    component: () => import('@/pages/Show/Show.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
