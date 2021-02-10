let state;

export function stepReducer(
  // console.log(`3--StepReducer, this.state.currentStep = `, this.state.currentStep)
  state = {
    currentStep: "Intro",
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
