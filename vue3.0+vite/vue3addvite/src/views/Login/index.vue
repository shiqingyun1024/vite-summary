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
      <el-form-item>
        <el-button type="primary" @click="login(ruleFormRef)"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Login } from '@/api'
import { useRouter} from 'vue-router'  // 导入路由

const router = useRouter(); // 实例化路由
const temp = reactive({
  user: "",
  password: "",
});
const rules = reactive({
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 18, message: "Length should be 3 to 18", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 3, max: 18, message: "Length should be 3 to 18", trigger: "blur" },
  ],
});

const ruleFormRef = ref(null)
// 登录
function login():void{
    ruleFormRef.value.validate(valid=>{ // 检验
       if(valid) {
           Login(temp).then(res=>{
               let {code,msg} = res.data; // 对象解构
               if(code == 200){
                //  跳转首页
                router.push('/home')
               }else{
                 alert(msg);
               }
               console.log(res);
               
           })
           console.log('submit');
       }else{
           console.log('error submit');
           return false
       }
    })
}
</script>

<style>
</style>