import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { AuthReducer } from "./AuthReducer/AuthReducer"
import { AppReducer } from "./AppReducer/AppReducer"
import thunk from "redux-thunk"
const combine = combineReducers({AuthReducer,AppReducer})
export const store = legacy_createStore(combine,applyMiddleware(thunk))