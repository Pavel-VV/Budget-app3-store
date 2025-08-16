import Vue from "vue";

const budgetListStore = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
    sort: "ALL",
    sortedList: null,
  },
  getters: {
    getBudgetList: ({ list }) => list,
    getTotalBalance: ({ list }) => {
      let balance = Object.values(list).reduce(function (sum, el) {
        return sum + el.value;
      }, 0);
      return balance;
    },
    getSort: ({ sort }) => sort,
    sortListBudget: ({ list, sortedList }) => {
      let listSort = { ...list };
      if (sortedList !== null) listSort = sortedList;
      return listSort;
    },
  },
  mutations: {
    ADD_NEW_ITEM(state, item) {
      Vue.set(state.list, item.id, item);
    },
    TOGGLE_SORT(state, sortType) {
      state.sort = sortType;
    },
    CHANGE_SORTED_LIST(state, list) {
      state.sortedList = list;
      // state.sortedList = {};
      // console.log(Object.keys(state.sortedList).length);
      // Object.values(list).forEach((elem) =>
      //   Vue.set(state.sortedList, elem.id, elem)
      // );
    },
    DELETE_ITEM(state, id) {
      Vue.delete(state.list, id);
    },
  },
  actions: {
    changeSort({ commit, getters }, type) {
      // console.log(type);
      if (type !== undefined) {
        commit("TOGGLE_SORT", type);
      }
      let sortedList = Object.values({ ...getters.getBudgetList }).reduce(
        (list, item) => {
          if (item.type === getters.getSort) {
            list[item.id] = item;
          } else if (getters.getSort === "ALL") list[item.id] = item;
          return list;
        },
        {}
      );
      commit("CHANGE_SORTED_LIST", sortedList);
      // this.sortedList = sortedList;
    },
    setNewItemList({ commit }, item) {
      const newItem = { ...item, id: String(Math.random()) };
      commit("ADD_NEW_ITEM", newItem);
    },
    deleteItemList({ commit }, id) {
      commit("DELETE_ITEM", id);
    },
  },
};

export default budgetListStore;
