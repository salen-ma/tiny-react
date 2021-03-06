import TinyReact from "./TinyReact"
const root = document.getElementById("root")

// jsx 对象会被 babel 转换为 TinyReact.createElement 形式
// https://babeljs.io/repl

const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <input type="text" value="13" />
  </div>
)

// TinyReact.render(virtualDOM, root)
// setTimeout(() => {
//   TinyReact.render(modifyDOM, root)
// }, 2000)

// console.log(virtualDOM)

function Demo() {
  return <div>Hello</div>
}

function Heart(props) {
  return (
    <div>
      {props.title}
      &hearts; <Demo />
    </div>
  )
}

// TinyReact.render(<Heart title="Hello React" />, root)

class Alert extends TinyReact.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Default title'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({
      title: 'Changed Title'
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
  }
  componentWillUpdate() {
    console.log("componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }

  render () {
    console.log(this.state)
    return (
      <div>
        {this.props.name}
        {this.props.age}
        <div>
          {this.state.title}
          <button onClick={this.handleClick}>改变title</button>
        </div>
      </div>
    )
  }
}

// TinyReact.render(<Alert name="张三" age={20} />, root)
// setTimeout(() => {
//   // TinyReact.render(<Heart title="Hello React" />, root)
//   TinyReact.render(<Alert name="张三" age={40} />, root)
// }, 2000)

class DemoRef extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  
  handleClick() {
    console.log(this.input.value)
    console.log(this.alert)
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        <button onClick={this.handleClick}>按钮</button>
        <Alert ref={alert => (this.alert = alert)} name="张三" age={20} />
      </div>
    )
  }
}

TinyReact.render(<DemoRef />, root)