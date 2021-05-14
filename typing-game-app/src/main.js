import Vue from 'vue'
import App from './App.vue'
import { BButton } from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('MyComponent', {
  components: { BButton },
  // Note that Vue automatically prefixes directive names with `v-`
  directives: { 'b-button': BButton }
  // ...
})

Vue.use(BButton)