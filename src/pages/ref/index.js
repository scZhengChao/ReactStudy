import React, { Component } from 'react'
const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
));
  
// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();

class Myref extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
       
    }
    focus(){
        this.refs.input.focus()
    }
    render(){
        return (
            <div>
                <input type="text" placeholder='我会自动接收refs聚焦' ref={'input'}/>
            </div>
        )
    }
}

function LogProps(Component) {
    class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
      }
  
      render() {
        const {forwardedRef, ...rest} = this.props;
  
        // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
        return <Component ref={forwardedRef} {...rest} />;
      }
    }
  
    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}
class Hoc extends Component {
    state = {
        name:'我是hoc'
    }
    focus(){
        this.refs.input.focus()
    }
    render(){
        return (
            <div>
                <input type="text" placeholder='Hoc转发refs' ref={'input'}/>
            </div>
        )
    }
}
const Hoclog = LogProps(Hoc)
export default class index extends Component {
    state = {
        a:'ref',
        data:[
            {
                id:0,
                term:'asfas',
                description:'asgas'
            },
            {
                id:1,
                term:'asfas',
                description:'asgas'
            },
            {
                id:2,
                term:'asfas',
                description:'asgas'
            },
        ]
    }
    componentDidMount(){
        // this.refs.myref.focus()
        this.refs.hocref.focus()

    }
    render() {
        return (
            <div>
                <FancyButton ref={ref}>Click me!</FancyButton>
                <Myref ref={'myref'}></Myref>
                <Hoclog ref={'hocref'}></Hoclog>
                <dl>
                    {this.state.data.map(item => (
                        // 没有`key`，React 会发出一个关键警告
                        <React.Fragment key={item.id}>
                            <dt>{item.term}</dt>
                            <dd>{item.description}</dd>
                        </React.Fragment>
                    ))}
                </dl>


            </div>
        )
    }
}
