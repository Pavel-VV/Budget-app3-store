<template>
  <div id="app">
    <FormBudget />
    <TotalBalance />
    <BudgetSort />
    <BudgetList @deleteItem="onDelete" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormBudget from "@/components/FormBudget";
import BudgetSort from "@/components/BudgetSort";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormBudget,
    BudgetSort,
  },
  data: () => ({
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
    dataType: "ALL",
    sortedList: null,
  }),
  computed: {
    ...mapGetters("budgetListStore", ["getBudgetList"]),
    // totalBalance() {
    //   let balance = Object.values(this.list).reduce(function (sum, el) {
    //     return sum + el.value;
    //   }, 0);
    //   return balance;
    // },
    // sortListBudget() {
    //   let list = { ...this.getBudgetList };
    //   if (this.sortedList !== null) list = this.sortedList;
    //   return list;
    // },
  },
  // watch: {
  //   getBudgetList: "sortList",
  // },
  methods: {
    onDelete(id) {
      this.$delete(this.list, id);
    },
    // onNewItem(item) {
    //   const newObj = { ...item, id: String(Math.random()) };
    //   this.$set(this.list, newObj.id, newObj);
    // },
    // sortList() {
    //   let type = this.dataType;
    //   let sortedList = Object.values(this.getBudgetList).reduce(
    //     (list, item) => {
    //       if (item.type === type) {
    //         list[item.id] = item;
    //       } else if (type === "ALL") list[item.id] = item;
    //       return list;
    //     },
    //     {}
    //   );
    //   this.sortedList = sortedList;
    // },
    // onSortList(type = "ALL") {
    //   this.dataType = type;
    //   this.sortList();
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
