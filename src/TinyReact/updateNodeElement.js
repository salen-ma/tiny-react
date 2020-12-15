// 是否是事件属性
const isEventProps = (propName) => {
  return propName.slice(0, 2) === 'on'
}

// 是否是 value 或者 checked 属性
const isValueOrChecked = (propName) => {
  return propName === 'value' || propName === 'checked'
}

// 为 DOM 添加属性
export default function updateNodeElement (newElement, virtualDOM) {
  const newProps = virtualDOM.props
  Object.keys(newProps).forEach(propName => {
    const newPropsValue = newProps[propName]
    // 事件属性
    if (isEventProps(propName)) {
      const eventName = propName.toLowerCase().slice(2)
      newElement.addEventListener(eventName, newPropsValue)
    } else if (isValueOrChecked(propName)) {
      newElement[propName] = newPropsValue
    } else if (propName !== 'children') {
      if (propName === 'className') {
        newElement.setAttribute('class', newPropsValue)
      } else {
        newElement.setAttribute(propName, newPropsValue)
      }
    }
  })
}