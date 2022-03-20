import axios from '@/utils/request'
export function Login(data) {
    return axios({
        method:'post',
        url:'get_login',
        data
    })
}