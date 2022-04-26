import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    component: () => import('@/views/HomeView.vue')
  },

  {
    path: '/centers',
    name: 'CenterList',
    component: () => import('@/views/CenterList.vue'),
  },

  {
    path: '/filters',
    name: 'FiltersView',
    component: () => import('@/views/Filters.vue'),
  },

  {
    path: '/testing',
    name: 'TestingView',
    component: () => import('@/views/HomeView.vue'),
  },

  {
    path: '/mobile-centers',
    name: 'MobileCenterList',
    component: () => import('@/views/MobileCenterList.vue'),
  },

  {
    path: '/centers/:name',
    name: 'CenterDetailView',
    component: () => import('@/views/CenterDetail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
