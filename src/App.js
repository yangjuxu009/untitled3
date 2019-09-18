import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

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

class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ssd = ["dfds", "d", "f"];
        reduce((a, b) => {
        }, []);
        const { PayIncrease1, PayDecrease1 } = this.props;
        return (
            <div>

                <input type = "button" value = "减1"onClick = {PayIncrease1}/>
                <span> { this.props.aa } </span>
                <input type = "button" value = "加1" onClick ={PayDecrease1}/>
            </div> )
    }
}


//需要渲染什么数据
function mapStateToProps(state={},prot) {
    return {aa:state.appreducer.aa};
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease1: () => dispatch({ type: '双倍'}),
        PayDecrease1: () => dispatch({ type: '三倍'})
    }
}
//连接组件
Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
