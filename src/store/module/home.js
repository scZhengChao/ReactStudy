import * as types from '../types';
let homeState = {
  a:1,
  b:2,
  text:''
}
let home = (state=homeState,action)=>{
  let {type,payload} = action
  switch(type){
    case types.add:{
      console.log(state)
      return Object.assign({},state,{a:state.a+payload})
    };
    case types.change:return Object.assign({},state,{[payload.name]:payload.content})
    default :return state
  }
}
export default home