import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Counter2 from "./Counter2";

//这是redux的原始state



/*//创建store
const store = createStore(reducer);
//订阅事件
store.subscribe(() =>{
    console.log(store.getState())}
);

//派发事件
//store.dispatch(decrease);
console.log(store.getState());*/

class Counter3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { PayIncrease, PayDecrease } = this.props;
        return (
            <div>
                <Counter2  lacotsha={this.props}/>
                <input type = "button" value = "减12"onClick = {PayIncrease}/>
                <span> { this.props.app2reducer.app2 } </span>
                <input type = "button" value = "加12" onClick ={PayDecrease}/>
            </div> )
    }
}


//需要渲染什么数据
function mapStateToProps(state={},prot) {

    return {...state};
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => dispatch({ type: '双倍' }),
        PayDecrease: () => dispatch({ type: '三倍' })
    }
}
//连接组件
Counter3 = connect(mapStateToProps, mapDispatchToProps)(Counter3);
export default Counter3;
