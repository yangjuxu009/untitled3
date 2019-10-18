import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'MyDisplayName';

export default class PropTypesTest extends React.Component{
    constructor(props){

        super(props);
        this.myRef = React.createRef();
        this.state={
            propTypes1: 0,
            propTypes2: [],
            propTypes3: "0",
        }
    }
    componentDidMount(){
        let value = this.context;
        this.refs
        let obs1 = {name: "开始"};
        let newobs = Object.assign({},obs1, {age: 5});
    }
    render() {
        const FancyButton = React.forwardRef((props, ref) => {

           return <button ref={ref} className="FancyButton">
                {props.children}
            </button>
    });



        return(
            <div>
                <ThemeContext.Provider value="dark">
                    <Toolbar />
                </ThemeContext.Provider>
                <FancyButton ref={this.myRef}><div>dddsf</div>Click me!</FancyButton>
                <div>{this.props.name}</div>
                <div>{this.props.value}</div>
                {this.state.propTypes1===0?(<div>没有赋值</div>):(<div>赋值</div>)}

                <Link to="/index">跳转counter</Link>
            </div>
        )
    }

}
PropTypesTest.contextType = ThemeContext;
PropTypesTest.propTypes= {
    name: PropTypes.number
};
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    componentDidMount(){

    }

    render() {
        return <button theme={this.context} />;
    }
}

