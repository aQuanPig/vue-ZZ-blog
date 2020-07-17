import {request} from "./index";
export function postComment(user,articles,content) {
  return request({
    url:`/comments`,
    method:'post',
    data:{user,articles,content}
  })
}
export function getMessage() {
  return request({
    url:'/message'
  })
}
export function postMessage(nickname,avatar,content) {
  return request({
    url:'/message',
    method:'post',
    data:{nickname,avatar,content}
  })
}
//获取留言的长度
export function getMessageLength() {
  return request({
    url:'/message/total'
  })
}

