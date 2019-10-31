import {store} from "../App";

const URL = 'ws://localhost:8080'

let ws = new WebSocket(URL)

ws.onopen = () => {

    console.log('connected')


};

ws.onmessage = evt => {
    try{
    const action = JSON.parse(evt.data)
    store.dispatch(action)}
    catch (e) {
        console.error(e)
    }
}


export default ws



