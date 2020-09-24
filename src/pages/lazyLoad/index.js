
import React, { Component, PureComponent,Suspense  } from 'react';

//React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。
//此代码将会在组件首次渲染时，自动导入包含 OtherComponent 组件的包。
//fallback 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 Suspense 组件置于懒加载组件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件。
const OtherComponent = React.lazy(() => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(import('./susLazy')) 
        },2000)
    })
    
});


class Lazy extends PureComponent {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const {Loading } = this.state
        return(
        <div>
            <input type="button" onClick={this.lazyLoad} value={'import 最好的懒加载'}/>
            {
                Loading?<Loading/>:null
            }
             <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    )}
    lazyLoad=()=>{
        // 在你的应用中引入代码分割的最佳方式是通过动态 import() 语法。
        import('./Loading').then(Loading=>{
            this.setState({
                Loading:Loading.default
            })
        })
      }
}


  
export default Lazy