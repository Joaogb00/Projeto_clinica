// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Formulario from '../components/views/Formulario.vue'
import Footer from '../components/Footer.vue'
import Perfil from '../components/Perfil.vue'
import Marcar from '../components/views/Marcar.vue'
import Conta from '@/components/views/Conta.vue'


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
  },
 
  {
    path: '/footer',
    name:'footer',
    component: Footer
  },
  {
    path: '/perfil',
    name:'perfil',
    component: Perfil
  },
  {
    path: '/agendamento',
    name:'agendamento',
    component: () => import('../components/views/Marcar.vue') // carregamento lazy
  },
  {
    path: '/conta',
    name:'conta',
    component: Conta
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
