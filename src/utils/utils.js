export function throttle(func,delay) {
  let prev = Date.now();
  return function () {
    let _that = this;
    let args = arguments;
    let now = Date.now();
    if(now - prev >= delay){
      func.apply(_that,args)
      prev = Date.now()
    }
  }
}
