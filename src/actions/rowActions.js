export const updateCurrentRow = (nextRow) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_ROW",
      newRow: nextRow,
    });
  };
};

export const clearCurrentRow = (row) => {
  console.log("clearCurrentRow called, row = ", row);
  switch (row) {
    case "row2":
      return (dispatch) => {
        dispatch({
          type: "CLEAR_ROW",
          row2: "",
        });
      };
    case row === "row3":
      return (dispatch) => {
        dispatch({
          type: "CLEAR_ROW",
          row3: "",
        });
      };
    case row === "row4":
      return (dispatch) => {
        dispatch({
          type: "CLEAR_ROW",
          row4: "",
        });
      };
    case row === "row5":
      return (dispatch) => {
        dispatch({
          type: "CLEAR_ROW",
          row5: "",
        });
      };
    case row === "row6":
      return (dispatch) => {
        dispatch({
          type: "CLEAR_ROW",
          row6: "",
        });
      };
    default:
      return null;
  }
};
