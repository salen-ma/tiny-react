import mountNativeElement from "./mountNativeElement"
import isFunction from "./isFunction"
import mountComponent from "./mountComponent"

export default function mountElement (virtualDOM, container, oldDOM) {
  if (isFunction(virtualDOM)) {
    // 渲染组件
    mountComponent(virtualDOM, container, oldDOM)
  } else {
    // 渲染真实 DOM
    mountNativeElement(virtualDOM, container, oldDOM)
  }
}