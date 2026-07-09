import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './styles/global.css'

const app = createApp(App)
app.use(router)

// GitHub Pages SPA redirect support
const params = new URLSearchParams(window.location.search)
const redirectPath = params.get('p')
if (redirectPath) {
  router.replace(redirectPath)
}

app.mount('#app')
