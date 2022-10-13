import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Ezos from './components'

const app = createApp(App)
app.use(Ezos)

app.mount('#app')
