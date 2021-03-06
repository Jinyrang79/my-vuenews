import Vue from 'vue';
import App from './App.vue';

import { router } from './routes/index.js';
import { store } from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router, // router 로 축약가능 ES6
  store
}).$mount('#app')
