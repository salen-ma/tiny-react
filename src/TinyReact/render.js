import diff from "./diff"

// 渲染虚拟 DOM 到 真实 DOM
export default function render (virtualDOM, container, oldDOM = container.firstChild) {
  diff(virtualDOM, container, oldDOM)
}