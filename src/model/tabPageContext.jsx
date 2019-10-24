import React, {Component} from 'react';
import {connect} from 'react-redux';
export const {Provider,Consumer} = React.createContext({
    theme: "themes.dark",
    toggleTheme: () => {},
});
const items = [
    {barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00},
    {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00},
    {barcode: 'ITEM000002', name: '苹果', unit: '斤', price: 5.50},
    {barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00},
    {barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00},
    {barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50}
]


class Mouse extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <div>
                <div style={{height: '600px', background: "#d1d2d1"}}>
                    <div>dfd</div>
                    {React.Children.map(this.props.children, (sv) => sv)}
                </div>

            </div>

        );
    }
}


class Cat extends React.Component {
    render() {
        return (
            <Consumer>
                {({theme, toggleTheme}) => (
                    <button
                        onClick={()=>{toggleTheme(569999)}}
                       >
                        {theme}
                        Toggle Theme
                    </button>
                )}
            </Consumer>

        );
    }
}

export default class TabPageContext extends React.Component {
    constructor(props){
        super(props);
        this.toggleTheme = (ss) => {
            this.setState(state => ({
                theme:
                   ss
            }));
        };

        // State 也包含了更新函数，因此它会被传递进 context provider。
        this.state = {
            theme: "themes.light",
            toggleTheme: this.toggleTheme,
        };
    }

    render() {
        return (
            <div>
                <Provider value={this.state}>
                <h1>移动鼠标!</h1>
                <Mouse>
                    <Cat/>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </Mouse>
                </Provider>
            </div>
        );
    }
}
