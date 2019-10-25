import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class StateTest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nums: 0,
            num: 0,
            propTypes2: [],
            propTypes3: "0",
        }
    }
    clickThis=(es)=>{
    this.setState({nums:"1+this.state.nums",nums1:"1+this.state.nums1"});

    debugger
console.log()


    }
    componentWillMount(){
        debugger
    }
    componentDidMount(){
        debugger
       /* this.setState( { nums: this.state.nums + 1 } );

        console.log( "diyici"+this.state.nums );    // 会输出什么？
        debugger
        for ( let i = 0; i < 100; i++ ) {
            this.setState( { num: this.state.num + 1 } );
            console.log( this.state.num );    // 会输出什么？
        }

        let obs1 = {name: "开始"};
        let newobs = Object.assign({},obs1, {age: 5});
        debugger*/
    }
    /*shouldComponentUpdate(nextProps, nextState) {
        debugger
        return true
    }*/
    componentWillReceiveProps(nextProps){
        debugger
    }
    componentWillUpdate(){
        debugger
    }
    componentDidUpdate(){
        debugger
    }
    render() {
        debugger
        return(
            <div>


                <div onClick={this.clickThis}>99999dfdsf</div>
                <div>{this.state.nums}</div>


                <Link to="/index">跳转counter</Link>
            </div>
        )
    }

}



