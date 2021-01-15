let state;

export function reducer(
  state = {
    currentStep: "Step1",
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