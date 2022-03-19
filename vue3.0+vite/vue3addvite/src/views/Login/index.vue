<template>
  <div class="login">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
export default {};
</script>

<style>
</style>