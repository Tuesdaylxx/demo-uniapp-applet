import Vue from 'vue'
import App from './App'

import uView from "uview-v1_1.8.6";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
