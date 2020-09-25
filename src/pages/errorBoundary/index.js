import React, { PureComponent,Component } from 'react'
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError:false
        };
    }
    static getDerivedStateFromError(error){
        // 更新state 使下一次渲染能够显示降级后UI
        return {
            hasError:true
        }
    }
    componentDidCatch(error,errorInfo){
        //同样可以讲错误上报服务器
        console.log(error,errorInfo)
    }

    render() {
        if(this.state.hasError){
            return <div>something went wrong</div>
        }
        return this.props.children
    }
}

export default ErrorBoundary;