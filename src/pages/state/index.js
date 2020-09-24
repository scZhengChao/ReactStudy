import React, {Component, PureComponent} from 'react'
import { connect } from 'react-redux';
import store from '../../store'
import * as types from '../../store/types'

class State extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            unsubscribe:null
        }
    }
    
    render(){
        let { add2,change ,text} = this.props
        return(
        <div>
             <div>次react项目 用于检测redux 和 store</div>
            <p>home</p>
            <p>store 庞大分块，异步高级action</p>
            <button onClick={add2}>add ...</button>
            <input type="text" name='text' onChange={change} placeholder='双向绑定'/>
            <div>{text}</div>
        </div>
    )}
    componentDidMount(){
        let unsubscribe =  store.subscribe(()=>{
            console.log(store.getState())
        })
        this.setState({
            unsubscribe:unsubscribe
        })
    }
       
    componentWillUnmount(){
        this.state.unsubscribe()
    }
    add(){
        console.log('add')
    }
}
let MapStateToProps = (state,props) => ({
    add:state.home.a,
    text:state.home.text
  })
  
let MapDispatchToProps = (dispatch, props) => ({
    add2:()=>{
        dispatch({type:types.add,payload:20})
    },
    change: (ev) => { //精悍的双向绑定，直接邦定到store 里
        dispatch({type:types.change,payload:{content:ev.target.value,name:ev.target.name}})
    }
})

export default connect(
    MapStateToProps,
    MapDispatchToProps
  )(State);
