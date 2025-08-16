<template>
  <div id="app">
    <FormBudget />
    <TotalBalance />
    <BudgetSort />
    <BudgetList />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormBudget from "@/components/FormBudget";
import BudgetSort from "@/components/BudgetSort";
export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormBudget,
    BudgetSort,
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
