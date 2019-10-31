import {store} from "../App";

const URL = 'wss://srrj6.sse.codesandbox.io/'

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



