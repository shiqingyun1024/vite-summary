<template>
  <div class="login">
    <el-form
      ref="ruleFormRef"
      :model="temp"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="用户名" prop="user">
        <el-input v-model="temp.user" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="temp.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const temp = reactive({
  user: '',
  password: ''
})
const rules = reactive({
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 18, message: 'Length should be 3 to 18', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 18, message: 'Length should be 3 to 18', trigger: 'blur' },
  ]
})
</script>

<style>
</style>