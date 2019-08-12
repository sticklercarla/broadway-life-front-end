import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import userReducer from "./userReducer";
import songBookReducer from "./songBookReducer"

export default combineReducers({
    pageReducer: pageReducer,
    userReducer: userReducer,
    songBookReducer: songBookReducer
})