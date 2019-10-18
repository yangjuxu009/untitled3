import {fetch} from "whatwg-fetch";

export default class counterAction {

    counterFeach(url,content,method="post"){
        return fetch(url, {
            method:method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Accept': 'application/json'
            },
            body: JSON.stringify(content)
        })
    }
}
export const counternew=new counterAction();
