import React from 'react';
import Counter2 from "./Counter2";
import App1 from "./App";
import App2 from "./App2";
import {BrowserRouter as Router,Route,Redirect,Switch,HashRouter} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './reducers';
// 使用合并后的那个Reducer
const store = createStore(appReducer);
// 2.构建路由
const Routesa = () => (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/index" component={Counter2}></Route>
                    <Route path="/page1" component={App1}></Route>
                    <Route path="/page2" component={App2}></Route>
                    <Redirect from="/" to="/index"/> {/*重定向*/}
                </Switch>
            </HashRouter>
        </Provider>
)

export default Routesa;
