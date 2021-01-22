import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer";

const rootReducer = combineReducers({
    stepReducer: stepReducer,
    userReducer: userReducer,
    progressReducer: progressReducer,
})

export default rootReducer;