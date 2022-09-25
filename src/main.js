import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

import App from './App.vue'
import router from './router'
import store from './store'

const APP = createApp(App)
APP.component('font-awesome-icon', FontAwesomeIcon)
APP.use(store)
APP.use(router)
APP.mount('#app')
