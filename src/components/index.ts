import { App } from 'vue'
import Button from './Button'
import Input from './Input'
import Calendar from './Calendar'
import DropDown from './DropDown'

const components = [Button, Input, Calendar, DropDown]

const install = (app: App) => {
  components.map(item => {
    app.component(item.name, item)
  })
}

export default {
  install,
  ...components
}