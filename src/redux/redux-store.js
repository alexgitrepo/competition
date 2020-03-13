import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import {combineReducers, compose, createStore} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
    app: appReducer,
    form: formReducer
})
let store = createStore(reducers, composeEnhancers())
export default store
