import React from 'react';
import Counter2 from "./../Counter2";
import App1 from "./../App";
import App2 from "./../App2";
/*import PropTypesTest from "./../model/propTypes";*/
import stateTest  from "./../model/stateTest";
/*import {MouseTracker} from "./../model/tabPage1";*/
import Counter33 from "./../Counter33";
import {hashHistory,Route,Redirect,Switch,HashRouter} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import appReducer from './../reducers';

// 使用合并后的那个Reducer
const store = createStore(appReducer,applyMiddleware(thunk));
// 2.构建路由

const chooseProducts = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../model/tabPage1').default)
    },'chooseProducts')
}

const helpCenter = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../model/tabPage1').default)
    },'helpCenter')
}
require.ensure(["modules/tips.jsx"], function(require) {
    var a = require("modules/tips.jsx");
    // ...
}, 'tips');
const saleRecord = (location, cb) => {
    require.ensure(['./../model/propTypes'], require => {
        cb(null, require('./../model/propTypes').default)
    },'saleRecord')
}
const RouteConfig = ()=>(
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App1}>
            <IndexRoute component={App2} />//首页
            <Route path="index" component={Counter33} />
            <Route path="helpCenter" getComponent={helpCenter} />//帮助中心
            <Route path="saleRecord" getComponent={saleRecord} />//销售记录
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
    </Provider>

);
export default RouteConfig;
