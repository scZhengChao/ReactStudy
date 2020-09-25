import React, { PureComponent } from 'react';
import Two from './two'
import  {  Context ,  Consumer} from './context'
const Comp = Consumer(Context.Consumer)(Two)

class One extends PureComponent {
    static contextType = Context
    constructor(props) {
        super(props);
        this.state = { 
            obj:{
                a:'里层的数据覆盖外层的数据'
            }
         };
    }
    componentDidMount(){
        console.log(this.props,'one 当中的props')
        console.log(this.context,'context 对象one')
    }
    render() {
        return (
            <div>
                one
                <Context.Provider  value={this.state.obj}   >
                    <Comp />
                </Context.Provider>
            </div>
        );
    }
}

export default One;