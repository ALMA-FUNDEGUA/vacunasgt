import Vue from 'vue'
import VueRouter from 'vue-router'
import Onboarding from '../views/Onboarding.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Onboarding',
    component: Onboarding
  },

  {
    path: '/dashboard',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
