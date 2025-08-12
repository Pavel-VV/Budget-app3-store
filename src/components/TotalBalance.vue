<template>
  <div class="total-value" :style="balanceColorStyle">
    Balance: {{ getTotalBalance }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters("budgetList", ["getTotalBalance"]),
    balanceColorStyle() {
      let totalColor =
        this.total < 0 ? "red" : this.total > 0 ? "green" : "black";
      return `color: ${totalColor}`;
    },
  },
};
</script>

<style scoped>
.total-value {
  font-weight: 600;
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>
