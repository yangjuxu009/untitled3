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
    this.setState({nums:new Date().getTime(),nums1:"1+this.state.nums1"});

    debugger


    }
   /*componentWillMount(){
        debugger
   }
    componentWillReceiveProps(nextProps){
        debugger
    }
    componentWillUpdate(){
        debugger
    }*/
    componentDidMount(){
        debugger

    }
    getDerivedStateFromProps(){
        debugger
    }
    shouldComponentUpdate(nextProps, nextState) {
        debugger
        return true
    }


    getSnapshotBeforeUpdate(){
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



