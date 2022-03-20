import axios from "axios";

const service = axios.create({
    baseURL:"http://127.0.0.1:3333/",
    timeout:10000
})
// 添加请求拦截器
// 在发送请求之前做些什么
service.interceptors.request.use(config=>{
    return config;
})
// 添加响应拦截器
service.interceptors.response.use(response=>{
    // 对响应数据做点什么
    return response
},err=>{
    // 对响应错误做点什么
    return Promise.reject(err);
})

export default service


