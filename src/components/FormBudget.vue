<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules">
      <ElFormItem label="Type" prop="type">
        <ElSelect
          class="type-select"
          v-model="formData.type"
          placeholder="chose type..."
        >
          <ElOption label="Income" value="INCOME" />
          <ElOption label="Outcome" value="OUTCOME" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comment" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton type="primary" @click="onSubmit">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FormBudget",
  data: () => {
    let validateValue = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error('Please inpute value don`t "0"'));
      } else callback();
    };
    return {
      formData: {
        type: "INCOME",
        comment: "",
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: "Please select type", trigger: "blur" },
        ],
        comment: [
          {
            required: true,
            message: "Please input some comment",
            trigger: "blur",
          },
        ],
        value: [
          { required: true, message: "Please inpute value", trigger: "blur" },
          { type: "number", message: "Please input number", trigger: "change" },
          { validator: validateValue, triger: "<blur></blur>" },
        ],
      },
    };
  },
  methods: {
    ...mapActions("budgetListStore", ["setNewItemList"]),
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          this.valueOutcom();
          this.setNewItemList({ ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
    valueOutcom() {
      if (this.formData.type === "OUTCOME" && this.formData.value > 0) {
        this.formData.value = Number(`-${this.formData.value}`);
      }
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>
