import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //为react状态管理的插件包
import { BrowserRouter, Route ,HashRouter} from 'react-router-dom';
import App from './pages/app';
import store from './store'

const supportsHistory = 'pushState' in window.history;
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }
  
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter  getUserConfirmation={getConfirmation} forceRefresh={!supportsHistory}>
            <Route component={App}></Route>
      </BrowserRouter>
  </Provider>
,
 document.getElementById('root'),
 ()=>{console.log('渲染成功了')
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

