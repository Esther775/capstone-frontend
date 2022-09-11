import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WarehouseIndex from '../views/WarehouseIndex.vue'
import Login from '../views/Login.vue'
import ShipmentsIndex from '../views/ShipmentsIndex.vue'
import ShipmentsShow from '../views/ShipmentsShow.vue'
import ShipmentsEdit from '../views/ShipmentsEdit.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shipments/:id',
    name: 'show',
    component: ShipmentsShow
  },
  {
    path: '/shipments/:id/edit',
    name: 'edit',
    component: ShipmentsEdit
  },
  {
    path: '/shipments',
    name: 'shipments',
    component: ShipmentsIndex
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/warehouses',
    name: 'warehouse',
    component: WarehouseIndex
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
