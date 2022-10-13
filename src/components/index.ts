import { App } from 'vue'
import Button from './Button'
import Input from './Input'

const components = [Button,Input]

const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install,
  ... components
}