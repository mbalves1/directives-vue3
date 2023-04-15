import { createApp } from 'vue'
import App from './App.vue'
import clickOutsideDirective from './click-outside-directive.js'


createApp(App)
  .directive('click-outside', clickOutsideDirective)
  .mount('#app')
