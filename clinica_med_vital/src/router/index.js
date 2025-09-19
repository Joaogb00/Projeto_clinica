// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Formulario from '../components/views/Formulario.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Formulario // página inicial
  },
  // exemplo de outra rota
  {
    path: '/main1',
    name: 'OutraPagina',
    component: () => import('../components/Main1.vue') // carregamento lazy
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
