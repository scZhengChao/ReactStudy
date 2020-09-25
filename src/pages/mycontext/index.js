import React, { PureComponent } from 'react';
import One from './one'
import  {  Context ,  Consumer} from './context'
const Comp = Consumer(Context.Consumer)(One)

// var MyProvider = Mycontext.Provider.value ='test'
class MyClass extends PureComponent {
    static contextType = Context
    constructor(props) {
        super(props);
        this.state = { 
            obj:{
                a:'1',
                b:'2',
                c:'3'
            }
        };
        console.log(this.props,'每个路由组件的props')
    }
    componentDidMount(){
        console.log(this.context,'context 对象 index的')
    }
    click=()=>{
        this.setState({
            obj:{
                a:'test',
                b:'2',
                c:"3"
            }
        })
    }
    render() {
        return (
            <div >
               
        <div onClick={this.click}> context <span>{this.context.a}</span> </div>
                {/* 这是写法一 */}
                {/* <Context.Provider value={this.state.obj}>
                    <Context.Consumer>
                        {value=>{
                            return <One {...value}></One>
                        }}
                    </Context.Consumer>
                </Context.Provider> */}
                {/* 每次都要这么写；就有点繁琐了，通过高阶组件来实现 */}
                <Context.Provider  value={this.state.obj}   >
                    {/* <Comp name={'自己的props'} /> */}
                    <One></One>
                </Context.Provider>
            </div>
        );
    }
}
// MyClass.contextType = Mycontext;
export default MyClass;