import React, { PureComponent } from 'react';
let Mycontext = React.createContext({
    a:'default',
    b:'default',
    c:'default',
    name:'default'
})

/**
 * 注意： 这个地方的props 可能 无法传入；因为你传入到了 Comsumer 上；
 * 所以还要改进一下 让 Comp 能够接受props 所以返回一个函数式组件，渲染出Consumer 就行
 * 这里装了下 来了个最简写法
 */
const withConsumer = Consumer => Comp =>props=><Consumer>{value=><Comp {...value} {...props}></Comp>}</Consumer>
   



export let  Context = Mycontext
export let  Consumer = withConsumer