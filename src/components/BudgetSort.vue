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
export default {
  name: "BudgetSort",
  data: () => ({
    sort: "ALL",
  }),
  methods: {
    budgetSort(e) {
      let button = e.target;
      if (button.tagName !== "BUTTON") button = button.parentElement;
      this.sort = button.dataset.sort;
      this.$emit("sortList", this.sort);
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
