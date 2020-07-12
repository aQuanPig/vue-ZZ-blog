import {request} from "./index";
export function getAdminUserData() {
   return request({
     url:'/admin'
   })
}
