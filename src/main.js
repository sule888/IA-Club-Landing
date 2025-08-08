import { createApp } from 'vue'
import './assets/base.css'    
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-sine',
  once: false,
  mirror: false
})