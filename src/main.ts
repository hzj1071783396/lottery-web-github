import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Bank from "./components/global/Bank.vue"

createApp(App)
    .component("Bank",Bank)
    .mount('#app')
