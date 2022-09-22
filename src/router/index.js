import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WarehouseIndex from '../views/WarehouseIndex.vue'
import Login from '../views/Login.vue'
import ShipmentsIndex from '../views/ShipmentsIndex.vue'
import ShipmentsShow from '../views/ShipmentsShow.vue'
import ShipmentsEdit from '../views/ShipmentsEdit.vue'
import ShipmentCreate from '../views/ShipmentCreate.vue'
import InventoryShow from '../views/InventoryShow.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shipment/new',
    name: 'Shipment Create',
    component: ShipmentCreate
  },
  {
    path: '/shipments/:id',
    name: 'show',
    component: ShipmentsShow
  },
  {
    path: '/inventory/:id',
    name: 'show-inventory',
    component: InventoryShow
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
