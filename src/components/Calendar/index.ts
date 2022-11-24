import { App } from 'vue'
import Calendar from './index.vue'

Calendar.name = 'g-calendar'

Calendar.install = (app: App) => {
  app.component(Calendar.name, Calendar)
}

export default Calendar