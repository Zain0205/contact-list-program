import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import List from "./components/List.vue";
import Form from "./components/Form.vue"

const app = createApp(App)

app.component('List', List)
app.component('Form', Form)


app.mount('#app')
