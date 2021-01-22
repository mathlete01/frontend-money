let state;

export function userReducer(
  state = {
    currentUser: {},
  },
  action
) {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: action.newUser,
      };
    default:
      return state;
  }
}

export default userReducer;
