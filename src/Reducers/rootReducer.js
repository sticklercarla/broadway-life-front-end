import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import userReducer from "./userReducer";
import songBookReducer from "./songBookReducer"
import auditionReducer from "./auditionReducer"
import castingOfficeReducer from './castingOfficeReducer'
import auditionLocationReducer from './auditionLocationReducer'

export default combineReducers({
    pageReducer: pageReducer,
    userReducer: userReducer,
    songBookReducer: songBookReducer,
    auditionReducer: auditionReducer,
    castingOfficeReducer: castingOfficeReducer,
    auditionLocationReducer: auditionLocationReducer
})