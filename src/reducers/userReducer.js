let state;

// Set initial value of State for when it's initialized
export function userReducer( state = { currentUser: {},},action) {
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
