import React, {Component} from 'react';
import {connect} from 'react-redux';

const items = [
    {barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00},
    {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00},
    {barcode: 'ITEM000002', name: '苹果', unit: '斤', price: 5.50},
    {barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00},
    {barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00},
    {barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50}
]

function mapStateToProps(state) {
    return {};
}

function Counter(prop) {

    return (<div>name:{prop.name} unit: {prop.unit} price:{prop.price}</div>);

}

class Item extends Component {
    render() {
        return (
            <div>
                Item
                <Counter {...this.props.items}/>
                <span>修改 <input type="text" onChange={(e) => {

                    this.props.changeItem(e, this.props.items);
                }}/></span>
                <button onClick={() => {

                    this.props.delteItem(this.props.items)
                }}>删除
                </button>
            </div>
        )
    }
}

function ItemList(prop) {
    return prop.listItem.map((its, index) => {
        return <Item key={its.barcode} items={its} delteItem={(its) => prop.delteItem(its)}
                     changeItem={(e, its) => prop.changeItem(e, its)}/>
    })

}

function ItemLiList(prop) {
    return (<div>
        <div>可口可乐</div>
        <div>雪碧</div>
        <div>苹果</div>
        <div>荔枝</div>
        <div>电池</div>
        <div>方便面</div>
        {/*  {prop.listItem.map((its,index)=>{
       return <div  key={its.name}>{its.name}</div>
   })}*/}

    </div>)

}

class Mouse extends Component {
    constructor(props) {
        super(props);

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {x: 0, y: 0, itemList: items};
        this.deleteItemMed = this.deleteItemMed.bind(this);
        this.changeItemMed = this.changeItemMed.bind(this);

    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    deleteItemMed(ss, ev) {
        const lelist = [].concat(this.state.itemList);
        for (let i = 0; i < lelist.length; i++) {
            const ss5 = lelist[i];
            if (ss.name == ss5.name) {
                lelist.splice(i, 1);
                break;
            }
        }

        this.setState({itemList: [...lelist]});
    }

    changeItemMed(ev, ss) {
        const lelist = [].concat(this.state.itemList);
        for (let i = 0; i < lelist.length; i++) {
            const ss5 = lelist[i];
            if (ss.barcode == ss5.barcode) {
                lelist[i]["price"] = ev.target.value;
                break;
            }
        }

        this.setState({itemList: [...lelist]});
    }

    render() {

        return (

            <div>
                <div style={{height: '600px', background: "#d1d2d1"}}>

                    <div>dfd</div>
                    <div onClick={() => {
                        let codes = "ITEM" + new Date().getTime();
                        this.setState({
                            itemList: [...this.state.itemList, {
                                barcode: codes,
                                name: '苹果',
                                unit: '斤',
                                price: 5.50
                            }]
                        })
                    }}>list集合添加
                    </div>
                    <div onClick={() => {

                        this.setState({
                            itemList: [...this.state.itemList, {
                                barcode: 'ITEM000002',
                                name: '苹果',
                                unit: '斤',
                                price: 5.50
                            }]
                        })
                    }}>list集合删除
                    </div>
                    {this.props.render(this.state)}
                    <ItemList listItem={this.state.itemList} delteItem={this.deleteItemMed}
                              changeItem={this.changeItemMed}/>
                    <div>dddddd</div>
                    <ItemLiList listItem={this.state.itemList}/>
                    {React.Children.map(this.props.children, (sv) => sv)}
                </div>

            </div>

        );
    }
}

export default connect(
    mapStateToProps,
)(Mouse);

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="/cat.jpg" style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
        );
    }
}

export class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse}/>
                )}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </Mouse>
            </div>
        );
    }
}
