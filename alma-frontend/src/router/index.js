import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/HomeView.vue')
  },

  {
    path: '/filters',
    name: 'FiltersView',
    component: () => import('@/views/Filters.vue'),
  },

  {
    path: '/testFilters',
    name: 'TestFiltersView',
    component: () => import('@/views/TestFilters.vue'),
  },

  {
    path: '/testList',
    name: 'TestList',
    component: () => import('@/views/TestList.vue'),
  },

  {
    path: '/testList/:name',
    name: 'TestDetailView',
    component: () => import('@/views/TestDetail.vue'),
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
