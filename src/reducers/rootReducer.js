import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import userReducer from "./userReducer";
// import progressReducer from "./progressReducer";
// import cardDebtReducer from "./cardDebtReducer";
import rowReducer from "./rowReducer"

const rootReducer = combineReducers({
    // On left is the key, on right is the Reducer
    stepReducer: stepReducer,
    userReducer: userReducer,
    // progressReducer: progressReducer,
    // cardDebtReducer: cardDebtReducer,
    rowReducer: rowReducer,
})

export default rootReducer;