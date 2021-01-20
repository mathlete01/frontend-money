let state;

export function userReducer(
    state = {
      user: {},
    },
    action
  ) {
    switch (action.type) {
      case "UPDATE_USER":
        return {
          ...state,
          user: action.newUser,
        };
      default:
        return state;
    }
  }

  export default userReducer;