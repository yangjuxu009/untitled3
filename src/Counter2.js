import React from 'react';
import ReactDOM from 'react-dom';
/*import Counter from "./App";
import Counter3 from "./App2";*/
import { connect } from 'react-redux';
import {Link,HashRouter} from 'react-router-dom';
import "./index.css";
/*import appReducers from "./reducers"

//创建store
const store = createStore(appReducers);*/
class Counter2 extends React.Component {
    constructor(props) {
        super(props);
        this.PayDecrease123 = this.PayDecrease123.bind(this);
        this.state = {coterNm: 0};
    }


    componentDidMount(){

        this.props.location

    }
    componentWillReceiveProps(nextProps,prevpss) { // 父组件重传props时就会调用这个方法
        this.setState((stats)=>{

            return {coterNm:nextProps.Counter2.aap2}
        })
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
                <input type = "button" value = "减11"onClick = {PayIncrease}/>
                <span> { this.props.Counter2.app2} </span>
                <input type = "button" value = "加11" onClick ={PayDecrease}/>
                <span> { this.state.coterNm} </span>
                <Link to="/page2">跳转app2</Link>

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
    return {Counter2:state.app2reducer};
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
