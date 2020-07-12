import {request} from "./index";
export function getCategoriesData() {
  return request({
    url:'/categories'
  })
}
