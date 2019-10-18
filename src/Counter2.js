import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import Moment from 'moment';
import PropTypesTest from "./model/propTypes"
import "./index.css";
import method, {counternew} from "./fetchAction/counterAction";
/*import appReducers from "./reducers"




//创建store
const store = createStore(appReducers);*/


var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});

promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
});

console.log(promise1);
const Feachcoun = counternew;
class Timeruns extends React.Component{
    constructor(props){
        super(props);
        this.state = {timeMoment : Moment().format("YYYY年MM月DD日 h:mm:ss")};
    }
    componentWillMount(){
    }
    shouldComponentUpdate(nextProps, nextState) {
        return true
    }
    componentWillReceiveProps(nextProps){
    }
    componentDidMount(){
       let times = setInterval( ()=> {
            this.setState(() => {
                return {
                    timeMoment: Moment().format("YYYY年MM月DD日 h:mm:ss")
                }
            });
        },500);
        this.props.stoptimes(times);
    }

   render(){
       return(
           <div>
               {this.state.timeMoment}
           </div>
       )
   }

}
class Counter2 extends React.Component {
    constructor(props) {
        super(props);
        this.PayDecrease123 = this.PayDecrease123.bind(this);
        this.state = {coterNm: 0,starttimes:0};
        this.listRef = React.createRef();
    }


    componentDidMount(){
        this.props.location

    }
    componentWillUnmount(){
        this.interNum
        clearInterval(this.interNum);
    }
    componentWillReceiveProps(nextProps,prevpss) { // 父组件重传props时就会调用这个方法
        this.setState((stats)=>{

            return {coterNm:nextProps.Counter2.aap2}
        })
    }

   /* getSnapshotBeforeUpdate(prevProps, prevState) {
        debugger
        //我们是否要添加新的 items 到列表?
        // 捕捉滚动位置，以便我们可以稍后调整滚动.
        /!*if (prevProps.list.length < this.props.list.length) {
            const list = this.listRef.current;
            return list.scrollHeight - list.scrollTop;
        }*!/
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        //如果我们有snapshot值, 我们已经添加了 新的items.
        // 调整滚动以至于这些新的items 不会将旧items推出视图。
        // (这边的snapshot是 getSnapshotBeforeUpdate方法的返回值)
        if (snapshot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapshot;
        }
    }*/

    fetchAction(){
        const url = "http://localhost:1208/fetchJSON/fetchAction";

        const params ={name:"first"};
        let fetchthen = counternew.counterFeach(url, params);
        fetchthen.then(
            response =>
                response.json()
        ).then(function(data) {
            // 接收到 data 打印出来
            console.log(data);
        })
            .catch(

        )
    }
    PayDecrease123(){
       /* try {
            this.props.history.push('page2');
        } catch (e) {
            this.props.lacotsha.history.push('page1');
        }*/
       /*this.setState((stats)=>{
          return {coterNm:this.props.aa}
       })*/
    }
    render() {
        var stylewall={
            width:"100px",
            height:"100px",
            outline:"100px solid red",
            outlineOffset:"-145px",
            border:"1px solid #000000",
            position:"relative"

        }
        const { PayIncrease, PayDecrease } = this.props;

        return (
            <div>
              {/*  <div className="flexTes" >
                    <div>1</div>
                    <div className="flexTes2">2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </div>*/}
                {/*<canvas id="canvas"></canvas>*/}
              {/*  <div style={stylewall}></div>*/}
              <div>
                  <PropTypesTest value={this.state.coterNm} name="12"/>
              </div>
                <input type = "button" value = "减11"onClick = {PayIncrease}/>
                <input type = "button" value = "fetch"onClick = {this.fetchAction}/>
                <span> { this.props.Counter2} </span>
                <input type = "button" value = "加11" onClick ={PayDecrease}/>
                <span> { this.state.coterNm} </span>
                <div><Link to="/page2">跳转app2</Link><span ref={this.listRef}><Timeruns  starttimes={this.state.starttimes} stoptimes={(times)=>this.setState({stoptimes:times})}/></span><span onClick={()=>{

                    clearInterval(this.state.stoptimes);
                }}>停止时间</span></div>
                <div><Link to="/PropType">跳转PropType</Link></div>

            </div> )
    }
}
/*class Particles extends React.Component {
    constructor(props) {
        super(props);
        this.minRadius = 5;
        this.maxRadius = 35;
        this.state={
            cwidth: 100,
            cheight:100
        }

    }
    componentDidMount(){

        let canves = document.getElementById("canvas");
        let wHeightAndWidth = this.getViewPortSize();
        let wHeight = wHeightAndWidth.height;
        let wWidth=wHeightAndWidth.width;
        canves.width = wWidth;
        canves.height = wHeight;
        let canves1 = canves.getContext("2d");

        debugger
        this.setState({cwidth: wWidth, cheight: wHeight});
        this.randomNm();
        var particle = [];
        for (let i = 0; i < 75; i++) {
            particle[i]={
                radius:this.randomNm(10,8),
                xPos:this.randomNm(0,wWidth),
                yPos:this.randomNm(0,wHeight),
                xVel:this.randomNm(0.5,1),
                yVel:this.randomNm(0.5,1),
            }
            this.draw(particle,i,canves1)
        }
        animate(particle, canves1,wWidth,wHeight);

    }
    draw(particle,i,ctx){
        debugger
        ctx.beginPath();
        ctx.arc(particle[i].xPos,particle[i].yPos,0,particle[i].radius,2*Math.PI);
        ctx.stroke();
    }
    getViewPortSize(){
        if (window.innerWidth) {
            return{
                width:window.innerWidth,
                height:window.innerWidth
            }
        }else {
            if (document.compatMode === "BackCompat") {
                return{
                    width:document.body.clientWidth,
                    height:document.body.clientHeight
                }
            }else {
                return{
                    width:document.documentElement.clientWidth,
                    height:document.documentElement.clientHeight
                }
            }

        }
    }
    randomNm(min,max){
        return Math.random() * (max-min) + min;
    }
    animate(particle,ctx,width,height){
        var that = this;
        setInterval(function () {
            ctx.clearRect(0,0,width,height);
            for (let i = 0; i < 75; i++) {
                particle[i].xPos += particle[i].xVel;
                particle[i].yPos += particle[i].yVel;
                that.draw(particle, ctx);
            }
        },1000/60)

    }

    render() {
        let wHeightAndWidth = this.getViewPortSize();
        let wHeight = wHeightAndWidth.width;
        let wWidth=wHeightAndWidth.height;

        const { PayIncrease, PayDecrease } = this.props;
        return (
            <div>
                <canvas style={{display:"block"}} id="canvas" width={this.state.cwidth} height={this.state.cheight} ></canvas>
            </div> )
    }
}
async function fn(args){
    let v1 = await promise1();
    let v2 = await promise2(v1);

}
*/
//需要渲染什么数据
function mapStateToProps(state={},prot) {
    /*this.setState(() => {
        return {coterNm: state.app2reducer.app2}
    });*/
    return {Counter2:state.app2reducer.app2};
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        PayIncrease: () => {dispatch({ type: '双倍2'})},
        PayDecrease: () => dispatch({ type: '三倍2'})
    }
}

//连接组件
Counter2 = connect(mapStateToProps, mapDispatchToProps)(Counter2);

export default Counter2;
/*
ReactDOM.render(<Provider store={store}>
    <Counter/>
    <Counter2/>
    <Counter3/>
   {/!* <Particles/>*!/}
</Provider>, document.getElementById('root'));*/
