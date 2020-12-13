import mountElement from "./mountElement"

//  对比新旧 DOM
export default function diff (virtualDOM, container, oldDOM) {
  if (!oldDOM) {
    mountElement(virtualDOM, container)
  }
}