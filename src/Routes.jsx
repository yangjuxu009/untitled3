import React from 'react';
import Counter2 from "./Counter2";
import App1 from "./App";
import App2 from "./App2";
import PropTypesTest from "./model/propTypes";
import stateTest  from "./model/stateTest";
import {MouseTracker} from "./model/tabPage1";
import TabPageContext from "./model/tabPageContext";
import TabPageContexttest from "./model/tabPageContexttest";
import Counter33 from "./Counter33";
import {hashHistory,Route,Redirect,Switch,HashRouter} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import appReducer from './reducers';

// 使用合并后的那个Reducer
const store = createStore(appReducer,applyMiddleware(thunk));
// 2.构建路由
const Routesa = () => (
        <Provider store={store}>
            <HashRouter history={history}>
                    <Route path="/page1" component={App1}></Route>
                    <Route path="/PropType" component={PropTypesTest}></Route>
                    <Route path="/index4" component={MouseTracker}></Route>
                    <Route path="/index" component={TabPageContexttest}></Route>
                    <Route path="/index1" component={stateTest}></Route>
                    <Route path="/page2" component={App2}></Route>
                    <Route path="/page3" component={Counter33}></Route>
                    <Redirect from="/" to="/index"/> {/*重定向*/}

            </HashRouter>
        </Provider>
)

export default Routesa;
