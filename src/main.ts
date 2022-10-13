import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Rafi from './components'

const app = createApp(App)
app.use(Rafi)

app.mount('#app')
