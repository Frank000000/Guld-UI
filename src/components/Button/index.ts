import { App } from 'vue'
import Button from './index.vue'

Button.name = 'r-button'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button