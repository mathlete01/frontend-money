import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import userReducer from "./userReducer";
import progressReducer from "./progressReducer";
import cardDebtReducer from "./cardDebtReducer";

const rootReducer = combineReducers({
    stepReducer: stepReducer,
    userReducer: userReducer,
    progressReducer: progressReducer,
    cardDebtReducer: cardDebtReducer,
})

export default rootReducer;