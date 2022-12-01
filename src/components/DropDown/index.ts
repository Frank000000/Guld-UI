import { App } from 'vue'
import DropDown from './index.vue'

DropDown.name = 'g-dropdown'

DropDown.install = (app: App) => {
  app.component(DropDown.name, DropDown)
}

export default DropDown