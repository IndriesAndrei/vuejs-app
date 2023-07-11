import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import '../node_modules//bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import $pages from './data';

const app = createApp(App);

// use() let us use a pluging, like the router file we made
app.use(router);

// every component will have access to this properties
app.config.globalProperties.$bus = $bus;
app.config.globalProperties.$pages = $pages;

app.use(router)

app.mount('#app')
