import React, { PureComponent } from 'react';
import Two from './two'
import  {  Context ,  Consumer} from './context'
const Comp = Consumer(Context.Consumer)(Two)

class One extends PureComponent {
    static contextType = Context
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props,'one 当中的props')
        console.log(this.context,'context 对象one')
    }
    render() {
        return (
            <div>
                one
                <Comp />
            </div>
        );
    }
}

export default One;