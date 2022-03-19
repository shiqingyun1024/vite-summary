import { createRouter,createWebHashHistory } from "vue-router";

const routes = [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      Comment:()=>import('../views/Login/index.vue')
    },
    {
      path:'/home',
      name:'home',
      Comment:()=>import('../views/Home/index.vue')
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router