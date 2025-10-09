import { createRouter, createWebHistory } from 'vue-router'

// ================== IMPORTAÇÕES ================== //
import Footer from '../components/Footer.vue'
import Perfil from '../components/Perfil.vue'
import Marcar from '../components/views/Marcar.vue'
import Conta from '@/components/views/Conta.vue'

// ================== DEFINIÇÃO DAS ROTAS ================== //
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Main1.vue') // ✅ Main1 é a página inicial agora
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import('../components/views/Formulario.vue')
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
  {
    path: '/Pag_medico/DashboardMedico',
    name: 'DashboardMedico',
    component: () => import('../components/views/Pag_medico/DashboardMedico.vue')
  },
  {
  path: '/cadastrado',
  name: 'Cadastrado',
  component: () => import('../components/views/Pag_Cadastrado/Cadastrado.vue')
},
{
  path: '/medcad',
  name: 'medcad',
  component: () => import('../components/views/Pag_Cadastrado/MedicosCad.vue')
}
,
{
  path: '/plano',
  name: 'plano',
  component: () => import('@/components/Plano.vue')
},
{
  path: '/planocad',
  name: 'planocad',
  component: () => import('@/components/views/PlanoCad.vue')
}

]

// ================== CRIAÇÃO DO ROUTER ================== //
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
