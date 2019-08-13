import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import userReducer from "./userReducer";
import songBookReducer from "./songBookReducer"
import auditionReducer from "./auditionReducer"

export default combineReducers({
    pageReducer: pageReducer,
    userReducer: userReducer,
    songBookReducer: songBookReducer,
    auditionReducer: auditionReducer
})