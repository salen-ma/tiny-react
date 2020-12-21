import diff from "./diff"

export default class Component {
  constructor(props) {
    this.props = props
  }

  updateProps(props) {
    this.props = props
  }
}
