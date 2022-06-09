import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import vs from 'vuesax'

//import 'vuesax/dist/vuesax.css' //Vuesax styles

// createApp(App).mount('#app')
const app=createApp(App)
//app.use(vs)
app.mount('#app')
