import { createRouter, createWebHistory } from 'vue-router'

// ================== IMPORTAÇÕES ================== //
import Formulario from '../components/views/Formulario.vue'
import Footer from '../components/Footer.vue'
import Perfil from '../components/Perfil.vue'
import Marcar from '../components/views/Marcar.vue'
import Conta from '@/components/views/Conta.vue'

// ================== DEFINIÇÃO DAS ROTAS ================== //
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Formulario // página inicial
  },
  {
    path: '/main1',
    name: 'OutraPagina',
    component: () => import('../components/Main1.vue') // carregamento lazy
  },
  {
    path: '/footer',
    name: 'footer',
    component: Footer
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: Marcar
  },
  {
    path: '/conta',
    name: 'conta',
    component: Conta
  },
  {
    path: '/medicos',
    name: 'medicos',
    component: () => import('../components/views/Medicos.vue')
  },
  {
    path: '/FormMedico',
    name: 'FormMedico',
    component: () => import('../components/views/FormMedico.vue')
  },
  {
    path: '/minhasconsultas',
    name: 'minhasconsultas',
    component: () => import('../components/views/MinasConsultas.vue')
  },

  // ✅ ROTA DO DASHBOARD MÉDICO (FALTAVA ESSA)
  {
    path: '/Pag_medico/DashboardMedico',
    name: 'DashboardMedico',
    component: () => import('../components/views/Pag_medico/DashboardMedico.vue')
  }
]

// ================== CRIAÇÃO DO ROUTER ================== //
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
