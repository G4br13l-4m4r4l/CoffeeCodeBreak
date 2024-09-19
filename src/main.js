import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'; // Importa o router


const app = createApp(App);

app.use(router); // Adiciona o router à instância do Vue
app.mount('#app');