let state;

export function stepReducer(
  state = {
    currentStep: "Step0",
  },
  action
) {
  switch (action.type) {
    case "UPDATE_STEP":
      return {
        ...state,
        currentStep: action.newStep,
      };
    default:
      return state;
  }
}

export default stepReducer;