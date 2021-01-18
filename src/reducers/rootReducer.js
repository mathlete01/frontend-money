import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import userReducer from "./userReducer";
import userIDReducer from "./userIDReducer";

const rootReducer = combineReducers({
    steps: stepReducer,
    user: userReducer,
    userID: userIDReducer
})

export default rootReducer;