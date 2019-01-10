import React, { Component } from 'react';

import { createStore, applyMiddleware } from "redux";
import CombineReducers from "./reducers/CombineReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { Provider } from "react-redux";

import Layout from './components/layout/Layout';

const store = createStore(
    CombineReducers,
    composeWithDevTools(applyMiddleware(thunk, promise))
);

class App extends Component {
    render = () => {
        return (
            <Provider store={store}>
                <Layout />
            </Provider>
        );
    }
}

export default App;
