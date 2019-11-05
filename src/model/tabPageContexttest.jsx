import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class TabPageContext extends React.Component {
    constructor(props){
        super(props);
        // State 也包含了更新函数，因此它会被传递进 context provider。
        this.state = {
            theme: "themes.light"

        };
    }
componentWillMount(){

}
componentDidMount(){

}

shouldComponentUpdate(nextProps, nextState) {

      /*  if (nextState.theme === "themes.light") {
            return false;
        }*/
        return true
    }
    componentWillReceiveProps(nextProps){

    }
    componentWillUpdate(){

    }
    render() {

        return (
            <div>
                <h1>移动鼠标!</h1>
                {this.state.theme}
                <input type="checkbox" name="nan" defaultChecked ={true}/>
                <input type="checkbox" name="nan"/>
                <input type="checkbox" name="nan"/>
                <input type="radio" name="nan" defaultChecked ={true}/>
                <input type="radio" name="nan"/>
                <Link to="/index1">跳转counter</Link>
                <Link to="/page1">跳转page1</Link>
            </div>
        );
    }
}
