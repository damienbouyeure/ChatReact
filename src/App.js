import React from 'react';
import { BrowserRouter as Router,
    Route,} from "react-router-dom";
import ChatContainer from "./container/ChatContainer";
import Login from "./components/Login";
import "./index.css";
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import {connect, Provider} from 'react-redux'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import ws from "./service/WebSocket";


const logger = store => next => action => {
    console.log(action)
    return next(action);
}



export const store = createStore(rootReducer,
    compose(applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
)




function App() {


    return (
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Login}/>
                <Route path="/chat" component={ChatContainer}/>


            </Router>
        </Provider>
    );
}

export default App;
