// let state;

export function clickReducer(
  state = {
    currentClick: "",
  },
  action
) {
  switch (action.type) {
    case "UPDATE_CLICK":
      return {
        ...state,
        currentClick: action.newClick,
      };
    default:
      return state;
  }
}

export default clickReducer;
