import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/login/index.js';
import Menu from '../pages/menu/index.js';
import Orders from '../pages/orders/index.js';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
