import React, { PureComponent } from 'react';
import Three from './three'
class Two extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        console.log(this.props,'two 当中的 props')
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