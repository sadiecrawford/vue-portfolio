import './assets/styles/main.css'
import './assets/styles/keyframes.css'
import './assets/styles/portfolio.css'
import './assets/styles/gist.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
