import Vue from "vue";
import Vuex from "vuex";
import budgetList from "./modules/budgetList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    budgetList,
  },
});
