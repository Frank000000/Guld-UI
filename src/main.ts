import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Guld from './components'

const app = createApp(App)
app.use(Guld)

app.mount('#app')
