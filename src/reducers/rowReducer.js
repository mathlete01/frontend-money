let state;

export function rowReducer(state = { currentRow: "row1" }, action) {
  switch (action.type) {
    case "UPDATE_ROW":
      return {
        ...state,
        currentRow: action.newRow,
      };
    // case "CLEAR_ROW" && currentRow === "row2":
    //   return {
    //     ...state,
    //     currentRow: action.row2,
    //   };
    // case "CLEAR_ROW" && currentRow === "row3":
    //   return {
    //     ...state,
    //     currentRow: action.row3,
    //   };
    // case "CLEAR_ROW" && currentRow === "row4":
    //   return {
    //     ...state,
    //     currentRow: action.row4,
    //   };
    // case "CLEAR_ROW" && currentRow === "row5":
    //   return {
    //     ...state,
    //     currentRow: action.row5,
    //   };
    // case "CLEAR_ROW" && currentRow === "row6":
    //   return {
    //     ...state,
    //     currentRow: action.row6,
    //   };
    default:
      return state;
  }
}

export default rowReducer;
