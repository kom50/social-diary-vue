import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './index.css'

// pinia store
import { createPinia } from 'pinia'

function SecretPiniaPlugin() {
    return { secret: 'The cake is a lie' }
}

const pinia = createPinia()
pinia.use(SecretPiniaPlugin)


// Application
const app = createApp(App)


// use router
app.use(router)

// use pinia store
app.use(pinia)

app.mount('#app')
