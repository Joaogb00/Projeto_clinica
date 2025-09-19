import { createRouter, createWebHistory } from 'vue-router'
import Main1 from '../components/Main1.vue'
import Main2 from '../components/Main2.vue'
import Footer from '../components/Footer.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main1',
      component: Main1,
    },
    {
      path: '/main2',
      name: 'Main2',
      
      component:Main2,
    },
    {
        path: '/footer',
        name: 'Footer',
        component:Footer,
    },
  ],
})

export default router
