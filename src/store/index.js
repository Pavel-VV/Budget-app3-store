import Vue from "vue";
import Vuex from "vuex";
import budgetListStore from "./modules/budgetListStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    budgetListStore,
  },
});
