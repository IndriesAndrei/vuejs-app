import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules//bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';

const app = createApp(App)

// every component will have access to this property
app.config.globalProperties.$bus = $bus;

app.use(router)

app.mount('#app')
