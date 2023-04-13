import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/championRankList'
    },
    {
      name: 'championRankList',
      path: '/championRankList',
      component: () => import('@renderer/views/championRankList/index.vue')
    }
  ]
})

export default router
