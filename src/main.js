import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCategoryAPI } from './apis/testApi'

const app = createApp(App)

app.use(createPinia())
app.use(router)
getCategoryAPI().then(res => {
  console.log(res)
})
app.mount('#app')
