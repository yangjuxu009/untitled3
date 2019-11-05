import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { DatePicker ,AutoComplete,Rate,Popover, Button} from 'antd';
import  'antd/dist/antd.css';
import moment from 'moment';
// 推荐在入口文件全局设置 locale
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


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
        const text = <span>Title</span>;
        const content = (
            <div>
                <p>Content</p>
                <p>Content</p>
            </div>
        );
        const dataSource = ['12345', '23456', '34567'];

        const { PayIncrease1, PayDecrease1 } = this.props;
        return (
            <div>

                <Popover placement="topLeft" title={text} content={content}>
                    <Button>Align edge / 边缘对齐</Button>
                </Popover>
                <Popover placement="left" title={text} content={content} arrowPointAtCenter>
                    <Button>Arrow points to center / 箭头指向中心</Button>
                </Popover>

                <Rate allowHalf defaultValue={2.5} />
                <AutoComplete dataSource={dataSource} />
                <DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
                <input type = "button" value = "减1"onClick = {PayIncrease1}/>
                <span> { this.props.aa } </span>
                <input type = "button" value = "加1" onClick ={PayDecrease1}/>
            </div> )
    }
}


//需要渲染什么数据
function mapStateToProps(state={},prot) {
    return {Counter:state.appreducer.aa};
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
