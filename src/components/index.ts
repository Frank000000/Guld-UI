import { App } from 'vue'
import Button from './Button'
import Input from './Input'
import Calendar from './Calendar'

const components = [Button,Input,Calendar]

const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install,
  ... components
}