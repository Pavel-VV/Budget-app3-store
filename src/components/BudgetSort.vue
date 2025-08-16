<template>
  <div class="button-wrap">
    <ElButton
      data-sort="OUTCOME"
      class="button-sort"
      type="primary"
      @click="budgetSort"
      >Расходы
    </ElButton>
    <ElButton
      data-sort="INCOME"
      class="button-sort"
      type="primary"
      @click="budgetSort"
      >Доходы
    </ElButton>
    <ElButton
      data-sort="ALL"
      class="button-sort"
      type="primary"
      @click="budgetSort"
    >
      Все
    </ElButton>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "BudgetSort",
  watch: {
    getBudgetList: function () {
      this.changeSort();
    },
  },
  computed: {
    ...mapGetters("budgetListStore", ["getBudgetList", "getSort"]),
  },
  methods: {
    ...mapActions("budgetListStore", ["changeSort"]),
    budgetSort(e) {
      let button = e.target;
      if (button.tagName !== "BUTTON") button = button.parentElement;
      this.changeSort(button.dataset.sort);
    },
  },
};
</script>

<style scoped>
.button-wrap {
  padding-bottom: 20px;
}

.button-sort {
  width: 110px;
}
</style>
