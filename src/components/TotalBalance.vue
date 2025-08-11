<template>
  <div class="total-value" :style="balanceColorStyle">Balance: {{ total }}</div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
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
