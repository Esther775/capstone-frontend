import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WarehouseIndex from '../views/WarehouseIndex.vue'
import ShipmentsIndex from '../views/ShipmentsIndex.vue'
import ShipmentsShow from '../views/ShipmentsShow.vue'
import ShipmentsEdit from '../views/ShipmentsEdit.vue'
import ShipmentCreate from '../views/ShipmentCreate.vue'
import InventoryShow from '../views/InventoryShow.vue'
import InventoryIndex from '../views/InventoryIndex.vue'
import PrintCreate from '../views/PrintCreate.vue'
import PrintIndex from '../views/PrintIndex.vue'
import PrintEdit from '../views/PrintEdit.vue'


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
    path: '/inventory',
    name: 'index-inventory',
    component: InventoryIndex
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
    path: '/warehouses',
    name: 'warehouse',
    component: WarehouseIndex
  },
  {
    path: '/print/new',
    name: 'Print Create',
    component: PrintCreate
  },
  {
    path: '/prints',
    name: 'Print Index',
    component: PrintIndex
  },
  {
    path: '/prints/:id/edit',
    name: 'Print Edit',
    component: PrintEdit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
