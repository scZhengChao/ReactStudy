import React from 'react'
import store from '../../store'
class componeLazy extends React.Component {
    constructor(props){
        super(props)
        console.log(store,'---store---')
    }
    render(){
        return (
            <div>
                loading.....
            </div>
        )
    }
    test(){
        console.log('lazy-----test--------------')
    }
}
export default componeLazy