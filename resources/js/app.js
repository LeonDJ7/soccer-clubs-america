require('./bootstrap')
import { createApp } from 'vue'
import App from '../views/App'
import router from './router'

const app = createApp(App).use(router)

app.mount('#app')
