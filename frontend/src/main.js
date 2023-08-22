import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { MotionPlugin } from '@vueuse/motion'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import css from './assets/css/style.css'

createApp(App).use(store).use(router).use(MotionPlugin).use(css).use(bootstrap).mount('#app')