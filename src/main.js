import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import vClickOutside from 'click-outside-vue3'
import store from './stores'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import '@/assets/styles/app.scss';

app.use(router)
app.use(store)
app.use(plugin, defaultConfig) // formkit https://formkit.com/
app.use(plugin, defaultConfig) // formkit https://formkit.com/
app.use(vClickOutside)

app.mount('#app')
