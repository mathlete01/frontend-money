let state;

export function userIDReducer(
    state = {
      currentUserID: "",
    },
    action
  ) {
    switch (action.type) {
      case "UPDATE_USERID":
        return {
          ...state,
          currentUserID: action.newUserID,
        };
      default:
        return state;
    }
  }

  export default userIDReducer;