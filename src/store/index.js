import Vue from 'vue'
import Vuex from 'vuex'
import system from "@/store/modules/system";
import getters from "@/store/getters";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {system},
  getters
})
