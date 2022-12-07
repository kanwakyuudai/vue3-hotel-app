import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { // 默认跳转首页
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import ('@/views/home/home.vue')
      // 懒加载
    },
    {
      path: '/favorite',
      component: () => import ('@/views/favorite/favorite.vue')
    },
    {
      path: '/message',
      component: () => import ('@/views/message/message.vue')
    },
    {
      path: '/order',
      component: () => import ('@/views/order/order.vue')
    },
    {
      path: '/cities',
      component: () => import ('@/views/cities/cities.vue'),
      meta: {
        // 此路由不展示底栏，全屏显示
        hideTabbar: true
      }
    },
    {
      path: '/search',
      component: () => import ('@/views/search/search.vue'),
      meta: {
        hideTabbar: true
      }
    },
  ]
})

export default router
