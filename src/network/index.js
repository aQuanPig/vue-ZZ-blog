import axios from 'axios'
import {Message} from 'view-design';
export function request(config) {
  let instance = axios.create({
    baseURL:'http://localhost:3000/web/api'
  })

  instance.interceptors.request.use(config=>{
    console.dir(config)
    return config
  },err=>{
    console.log(err)
  })
  instance.interceptors.response.use(res=>{
    return res
  },error => {
    error.response.data.message && Message.error({content:error.response.data.message,background: true,})
  })
  return instance(config)
}
