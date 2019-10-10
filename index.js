import React from 'react';
import ReactDOM from 'react-dom';
import Routesa from "./src/Routes";
import './src/index.css';
/*import Routes from "./src/Routes";*/
/*
//这是redux的原始state
const tiger = 10000;

//这是action
const increase = {
    type:'涨工资'
}
const decrease = {
    type:'扣工资'
}

//这是reducer
const reducer = (state = tiger, action) => {
    switch (action.type){
        case '涨工资':
            return state += 100;
        case '扣工资':
            return state -= 100;
        default:
            return state;
    }
}
//创建store
const store = createStore(reducer);
//订阅事件
store.subscribe(() =>
    console.log(store.getState())
);

//派发事件
store.dispatch(increase);
console.log(store.getState());


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }
    // 加1
    increase() {
        let self = this;
        self.setState({ number: self.state.number + 1 })
    }
    // 减一
    decrease() {
        let self = this;
        self.setState({ number: self.state.number - 1 })

    }


    render() {
        return (
            <div>
                <input type = "button" value = "减1"onClick = { this.decrease }/>
                <span> { this.state.number } </span>
                <input type = "button" value = "加1" onClick = { this.increase }/>
            </div> )
    }
}
*/
ReactDOM.render(<Routesa/>, document.getElementById('root'));
