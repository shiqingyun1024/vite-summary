import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import store from './store/index'
import App from './App.vue'

createApp(App).use(ElementPlus).mount('#app')
