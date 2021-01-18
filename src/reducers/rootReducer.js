import { combineReducers } from "redux";
import stepReducer from "./stepReducer";
import userReducer from "./userReducer";
import userIDReducer from "./userIDReducer";

const rootReducer = combineReducers({
    currentStep: stepReducer,
    user: userReducer,
    userID: userIDReducer
})

export default rootReducer;

// function stepReducer(
//   state = {
//     currentStep: "Step0",
//   },
//   action
// ) {
//   switch (action.type) {
//     case "UPDATE_STEP":
//       return {
//         ...state,
//         currentStep: action.newStep,
//       };
//     default:
//       return state;
//   }
// }