import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //This is for the use of web dev tools

const store = createStore( allReducers, composeEnhancers(applyMiddleware(thunk)) );

export default store