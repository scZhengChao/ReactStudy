import React from 'react';
import { createStore, applyMiddleware ,combineReducers } from 'redux' //原始 状态管理 和 改变时dispatch支持函数;
import thunk from "redux-thunk";  //配合改装dispatch 支持函数
import  login from './module/login.js';
import home from './module/home';

let reducer = combineReducers({ 
  login,
  home
})
let store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default store