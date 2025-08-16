<template>
  <div class="list-item">
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value" :style="colorValue">{{ item.value }}</span>
    <i :class="iconObject" class="icon-item"></i>
    <ElButton
      class="button-item"
      type="danger"
      size="mini"
      @click="deleteItem(item.id)"
      >Delete</ElButton
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BudgetListItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("budgetListStore", ["deleteItemList"]),
    deleteItem(id) {
      if (confirm("Вы точно хотите удалить запись ?")) {
        this.deleteItemList(id);
      }
    },
  },
  computed: {
    valueIsPositive() {
      return this.item.value > 0 ? true : false;
    },
    iconObject() {
      return {
        "el-icon-top": this.valueIsPositive,
        "el-icon-bottom": !this.valueIsPositive,
      };
    },
    colorValue() {
      return this.valueIsPositive ? "color:green" : "color:red";
    },
  },
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.budget-value {
  font-weight: 600;
  margin-left: auto;
  margin-right: 20px;
}

.button-item {
  margin-left: 5px;
}
</style>
