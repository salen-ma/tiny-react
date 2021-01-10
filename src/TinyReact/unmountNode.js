export default function unmountNode (node) {
  console.log(node, 'beforeRemove')
  node.remove()
}