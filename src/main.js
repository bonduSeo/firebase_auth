import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {initFirebase, getAuthService} from './firebase'


initFirebase()
export const authService = getAuthService()





createApp(App).use(router).mount('#app')
