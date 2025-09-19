// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// cria a aplicação Vue e adiciona o router
createApp(App)
  .use(router)
  .mount('#app')
