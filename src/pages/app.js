import React, { Component  } from 'react';

import styles from './app.module.css'
import {
    Switch, 
    BrowserRouter, 
    Route ,
    HashRouter,
    Redirect,
    Link,
    NavLink,
} from 'react-router-dom';
// activeClassName(string)：设置选中样式，默认值为active
// activeStyle(object)：当元素被选中时，为此元素添加样式
// exact(bool)：为true时，只有当导致和完全匹配class和style才会应用
// strict(bool)：为true时，在确定为位置是否与当前URL匹配时，将考虑位置pathname后的斜线
// isActive(func)判断链接是否激活的额外逻辑的功能


import loadable from 'react-loadable';
import Loadding from './loadding/loadding';
import ErrorBoundary from './errorBoundary'

const Mycontext = loadable({loader:()=>import('./mycontext'),loading:Loadding})
const Lazy = loadable({loader: () => import('./lazyLoad'), loading: Loadding })
const State = loadable({loader: () => import('./state'), loading: Loadding })
const MyRef = loadable({loader: () => import('./ref'), loading: Loadding })
const Portals = loadable({loader: () => import('./portals'), loading: Loadding })
const RenderProps = loadable({loader: () => import('./RenderProps'), loading: Loadding })

export class App extends Component {
  constructor() {
    super();
    this.state = {
     
    };

  }
  profilerCb(data){
    console.log(data)
  }
  render() {
  
   
    return (
        <>
            <ErrorBoundary>
                    <nav>
                        <Link  
                            to={{
                                pathname: '/lazyload',
                                search: '?sort=name',
                                hash: '#the-hash',
                                state: { fromDashboard: true }
                            }} 
                            className='test'
                        >lazyload</Link> | 
                        <NavLink
                            to='/context'
                        >Context</NavLink> | 
                        <NavLink 
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                            to='/store'
                            exact={true}
                            activeClassName={styles.activeRouter}
                            // isActive={()=>window.open('https://www.baidu.com')}
                            strict={true}
                        >store</NavLink>|
                        <NavLink 
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                            to='/MyRef'
                            exact={true}
                            activeClassName={styles.activeRouter}
                            // isActive={()=>window.open('https://www.baidu.com')}
                            strict={true}
                        >MyRef</NavLink>|
                        <NavLink 
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                            to='/Portals'
                            exact={true}
                            activeClassName={styles.activeRouter}
                            // isActive={()=>window.open('https://www.baidu.com')}
                            strict={true}
                        >Portals</NavLink>|
                        <NavLink 
                            activeStyle={{
                                fontWeight: 'bold',
                                color: 'red'
                            }}
                            to='/RenderProps'
                            exact={true}
                            activeClassName={styles.activeRouter}
                            // isActive={()=>window.open('https://www.baidu.com')}
                            strict={true}
                        >RenderProps</NavLink>|
                    </nav>
                    
                    <Switch>
                            <Route path='/lazyload' component={Lazy} />
                            <Route path='/store' component={State} />
                            <Route path='/context' component={Mycontext} />
                            <Route path='/MyRef' component={MyRef} />
                            <Route path='/Portals' component={Portals} />
                            <Route path='/RenderProps' component={RenderProps} />
                            <Redirect exact from='/' to='/lazyload' />
                    </Switch>
            </ErrorBoundary>
        </>
    );
  }
 
}


export default App

