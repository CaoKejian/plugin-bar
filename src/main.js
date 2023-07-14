import { createApp } from 'vue'
import App from './App.vue'

import colinUI from './plugin/index'
createApp(App).use(colinUI).mount('#app')
