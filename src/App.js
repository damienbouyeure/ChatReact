import React from 'react';
import Chat from "./components/Chat";
import logo from './logo.svg';
import "./index.css";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {


  return (
      <Provider store={store}>

       <Chat />

      </Provider>
  );
}

export default App;
