import createDOMElement from "./createDOMElement"
import unmountNode from "./unmountNode"

// 渲染真实 DOM
export default function mountNativeElement (virtualDOM, container, oldDOM) {
  const newElement = createDOMElement(virtualDOM)
  // 判断旧的 dom 是否存在，存在则删除
  if (oldDOM) {
    unmountNode(oldDOM)
  }
  // 挂载真实 DOM
  container.appendChild(newElement)

  // 获取类组件实例
  let component = virtualDOM.component
  if (component) {
    component.setDOM(newElement)
  }
}