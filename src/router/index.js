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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
