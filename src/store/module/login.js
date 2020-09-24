import * as types from '../types';
let loginState = {
  c:3,
  d:4
}
let login = (state=loginState,action)=>{
  let {type,payload} = action
  switch(type){
    case types.subtract : return Object.assign({},state,{d:1})
    default : return state
  }
}
export default login