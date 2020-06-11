import Vue from "vue";
import Vuex from "vuex";
import * as showModule from "./showModule";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {},
  modules: { showModule },
  getters: {}
});
export default store;
