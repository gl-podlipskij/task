import { createApp } from 'vue'
import App from './App.vue'
import './styles/diagram/index.css'
import {createPinia} from "pinia";
import Demo from "./pages/diagram/demo.vue";
import Shop from "./pages/shoper/shop.vue";
import {createRouter, createWebHistory} from "vue-router";
import Landing from "./pages/landing/landing.vue";

const pinia = createPinia();

const routes = [
    {path: '/', component: Demo},
    {path: '/shop', component: Shop},
    {path : '/landing', component: Landing},
]
const router = createRouter({
    history : createWebHistory(),
    routes,
});

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');