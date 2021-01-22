let state;

export function progressReducer(
  state = {
    currentProgress: "",
  },
  action
) {
  switch (action.type) {
    case "UPDATE_PROGRESS":
      return {
        ...state,
        currentProgress: action.newProgress,
      };
    default:
      return state;
  }
}

export default progressReducer;
