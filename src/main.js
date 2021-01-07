import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './styles/index.scss'
import "core-js/stable";
import "regenerator-runtime/runtime";
import api from "@/utils/api";

Vue.config.productionTip = false

Vue.prototype.api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
