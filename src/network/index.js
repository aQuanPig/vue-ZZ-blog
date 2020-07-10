import axios from 'axios'
export function request(config) {
  let instance = axios.create({
    baseURL:'http://localhost:3000/web/api'
  })
  return instance(config)
}
