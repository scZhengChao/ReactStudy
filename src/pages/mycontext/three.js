import React, { PureComponent } from 'react';

function Three(props){
    console.log(props,'three 函数组件当中的 props')
    throw new Error('函数式组件 检验错误边界')
    return (
        <div>
            three
        </div>
    )
}

export default Three;