import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UIComponents from './components/UI'

const app = createApp(App)

UIComponents.forEach(component => {
  if (component.name) {
    app.component(component.name, component)
  }
})

app.mount('#app')