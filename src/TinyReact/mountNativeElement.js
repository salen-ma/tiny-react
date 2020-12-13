import createDOMElement from "./createDOMElement"

// 渲染真实 DOM
export default function mountNativeElement (virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM)

  // 挂载真实 DOM
  container.appendChild(newElement)
}