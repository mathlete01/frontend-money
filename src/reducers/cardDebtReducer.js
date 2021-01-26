let state;

export function cardDebtReducer(
  state = {
    cc_1: "",
    cc_2: "",
    cc_3: "",
  },
  action
) {
  switch (action.type) {
    case "UPDATE_CARDDEBT":
      return {
        ...state,
        cc_1: action.cc_1,
        cc_2: action.cc_2,
        cc_3: action.cc_3,
      };
    default:
      return state;
  }
}

export default cardDebtReducer;
