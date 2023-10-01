import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Overview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: HomeView
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: () => import('../views/Inventory.vue')
    }
  ]
})

export default router
