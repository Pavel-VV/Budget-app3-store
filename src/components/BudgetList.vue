<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="!isEmpty">
        <div v-for="(item, prop) in sortListBudget" :key="prop">
          <BudgetListItem :item="item" @deleteItemToList="deleteItemToApp" />
        </div>
      </template>
      <ElAlert type="info" :title="emptyTitle" :closable="false" v-else />
    </ElCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BudgetListItem from "@/components/BudgetListItem";
export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({ 1: 1 }),
    },
  },
  data: () => ({
    header: "Budget list",
    emptyTitle: "Empty list",
  }),
  computed: {
    ...mapGetters("budgetListStore", ["sortListBudget"]),
    isEmpty() {
      return !Object.keys(this.list).length;
    },
  },
  methods: {
    deleteItemToApp(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>
