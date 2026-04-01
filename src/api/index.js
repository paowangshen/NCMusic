import axios from "axios"

// 配置后端地址
const BASE_URL = "http://localhost:3000"

// 创建实例对象
const instance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    withCredentials:true
})

// 请求拦截器：可以统一添加 token 
instance.interceptors.request.use(
    (config) =>{
        // 添加 token
        // const token = localStorage.getItem("token")
        // if(token){
        //     config.headers.Authorization = `Bearer ${token}`
        // }
        return config
    },
    (error) => Promise.reject(error)
)

// 响应拦截器：统一处理 code / 错误
instance.interceptors.response.use(
    (response) =>{
        // 假设后端返回:{code,data,message}
        const res = response.data
        return res
    },
    (error) =>{
        // 处理全局错误提示
        // 如：网络错误、401、未登录等
        return Promise.reject(error)
    }
)

// 简单 GET / POST 封装
export function get(url,params = {},config = {}){
    return instance.get(url,{params,...config})
}

export function post(url,data={},config={}){
    return instance.post(url,data,config)
}

const api = {
    get,
    post
}

export default api