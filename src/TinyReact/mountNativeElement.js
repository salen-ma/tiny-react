import createDOMElement from "./createDOMElement"

// 渲染真实 DOM
export default function mountNativeElement (virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM)
  // 挂载真实 DOM
  container.appendChild(newElement)

  // 获取类组件实例
  let component = virtualDOM.component
  if (component) {
    component.setDOM(newElement)
  }
}