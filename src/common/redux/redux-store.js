import { createStore, combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import {menuReducer} from "./menu-reducer";
let reducers = combineReducers({
    form: formReducer,
    menu: menuReducer
})
export let store = createStore(reducers);

window.store = store;

export default store;