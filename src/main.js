import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


createApp(App).use(router).use(store).mount('#app')
