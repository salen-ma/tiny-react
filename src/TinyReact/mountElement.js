import mountNativeElement from "./mountNativeElement"

// 渲染真实 DOM
export default function mountElement (virtualDOM, container) {
  mountNativeElement(virtualDOM, container)
}