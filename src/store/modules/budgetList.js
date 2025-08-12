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
  },
  getters: {
    getTotalBalance: ({ list }) => {
      let balance = Object.values(list).reduce(function (sum, el) {
        return sum + el.value;
      }, 0);
      return balance;
    },
  },
  mutations: {},
  actions: {},
};

export default budgetListStore;
