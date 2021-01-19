import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    stepReducer: stepReducer,
    userReducer: userReducer,
})

export default rootReducer;