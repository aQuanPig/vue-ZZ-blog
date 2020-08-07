import {request} from "./index";
export function postAnswer(user,comment,content) {
  return request({
    url:'/answer',
    method:'post',
    data:{user,comment,content}
  })
}
