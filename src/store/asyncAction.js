import * as types from './types';
import React from 'react';
import { Redirect } from 'react-router-dom';;
import queryString from 'query-string';
// export let asyncAction =(type='post',url,payload)=>(dispatch,getState)=>{
//   if (options) {
//     url = url +"?" + queryString.stringify(options) 
//   }
//   return fetch(
//     url,
//     {
//         credentials:"include"
//     }
//         ).then((res) =>{
//             return res.json()
//         }).then(
//             data => {
//                 if (data.err == 0) {
//                     dispatch({ type: type, payload: data });  
//                     // console.log(data)
//                 } 
//                 // dispatch({ type: types.bloadding, payload: false });
//                 // console.log(getstate())
//                 return data
//             }
//         )
// }

//返回一个函数给外部的dispatch
export let asyncAction2=({url,type,id})=>(dispatch,getState)=>{
  dispatch({type:'VIEW_LOADING',payload:true});
  return fetch(
    url,
    /*{
      body:'?id='+id
    }*/
  ).then(
    res=>res.json()
  ).then(
    res=>{
      setTimeout(()=>{
        dispatch({type:'VIEW_LOADING',payload:false});
        dispatch({type:type,payload:res});
      },1000)
    }
  );
};
