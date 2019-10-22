// @ts-ignore
import React,{Component} from 'react';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

class Hellsot extends React{
    constructor(props: any){
        super(props);
    }

    clicshead(num?:number):boolean {
        return false;
    }
    render(){
        // @ts-ignore
        return (
            <div>
                <div onClick={()=>this.clicshead}>sss</div>
            </div>
        )
    }

}
