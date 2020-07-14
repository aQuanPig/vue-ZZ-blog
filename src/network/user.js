import {request} from "./index";
export function getAdminUserData() {
   return request({
     url:'/admin'
   })
}

export function postUserData(model) {
  return request({
    url:'/user',
    method: 'post',
    data:model
  })
}

export function validateUser({username,password}) {
   return request({
     url:'/login',
     method:'post',
     data:{username,password}
   })
}
