import { createApp } from 'vue'
import App from './App.vue'

import colinUI from './plugin/index'
// import colinUI from 'colinbar'
createApp(App).use(colinUI).mount('#app')
