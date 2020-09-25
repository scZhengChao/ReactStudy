import React, { PureComponent } from 'react';
import Three from './three'
import  {  Context ,  Consumer} from './context'


class Two extends PureComponent {
    static contextType = Context
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props,'two 当中的 props')
        console.log(this.context,'context 对象two')
    }
    render() {
        return (
            <div>
                two
                <Three/>
            </div>
        );
    }
}

export default Two;