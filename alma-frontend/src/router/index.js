import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue'),
  },

  {
    path: '/filters',
    name: 'FiltersView',
    component: () => import('@/views/Filters.vue'),
  },

  {
    path: '/centers',
    name: 'CenterList',
    component: () => import('@/views/CenterList.vue'),
  },

  {
    path: '/centers/:name',
    name: 'CenterDetailView',
    component: () => import('@/views/CenterDetail.vue'),
  },

  {
    path: '/testing',
    name: 'TestingView',
    component: () => import('@/views/Testing.vue'),
  },

  {
    path: '/directories',
    name: 'DirectoriesView',
    component: () => import('@/views/Directories.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
