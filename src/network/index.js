import axios from 'axios'
import {Message} from 'view-design';
import {SHOW_LOADING,HIDDEN_LOADING} from 'store/mutation-types'
import store from 'store'
export function request(config) {
  let instance = axios.create({
    baseURL:'http://localhost:3000/web/api'
  })

  instance.interceptors.request.use(config=>{
    store.commit(SHOW_LOADING)
    return config
  },err=>{
    console.log(err)
  })
  instance.interceptors.response.use(res=>{
    store.commit(HIDDEN_LOADING)
    return res
  },error => {
    error.response.data.message && Message.error({content:error.response.data.message,background: true,})
  })
  return instance(config)
}
