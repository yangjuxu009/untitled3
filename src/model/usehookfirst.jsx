import React, {Component,useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
function Usertest() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        debugger
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        return function (ssd) {
            debugger
        }
    },[count]);

    const [count1, setCount1] = useState(5);

    useEffect(() => {
        debugger
        count
        // Update the document title using the browser API
        document.title = `You clicked ${count1} times`;
        return function (ssd) {
            debugger
        }
    },[count1]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <p>You clicked {count1} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setCount1(count1 + 1)}>
                Click me
            </button>
            <Link to="/index1">跳转counter</Link>
        </div>
    );
}

Usertest.PropTypes={

}
export default Usertest;

class UseHookFirst extends Component {
    render() {
        return (
            <div>
                <Usertest />
            </div>
        );
    }
}

/*export default UseHookFirst;*/
