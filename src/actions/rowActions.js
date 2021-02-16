// export const setCurrentRow = (currentRow) => {
//     return(dispatch) => {
//         dispatch({
//             type: "UPDATE_ROW",
//             newRow: currentRow
//         })
//     }
// }

export const updateCurrentRow = (nextRow) => {
  console.log(`updateCurrentRow: nextRow = `, nextRow)
  return (dispatch) => {
    dispatch({
      type: "UPDATE_ROW",
      newRow: nextRow,
    });
  };
};

export const clearCurrentRow = (row) => {
  switch (true) {
    case row === "row2":
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
  }
};

// export const incrementRow = () => {
//   switch (true) {
//     case this.props.currentRow === "row1":
//         return (dispatch) => {
//             dispatch({
//               type: "INCREMENT_ROW",
//               row2: "",
//             });
//           };
//       return "row2";
//     case this.props.currentRow === "row2":
//       return "row3";
//     case this.props.currentRow === "row3":
//       return "row4";
//     case this.props.currentRow === "row4":
//       return "row5";
//     case this.props.currentRow === "row5":
//       return "row6";
//     default:
//       return null;
//   }
// };

// export const decrementRow = () => {
//   switch (true) {
//     case this.props.currentRow === "row2":
//       return "row1";
//     case this.props.currentRow === "row3":
//       return "row2";
//     case this.props.currentRow === "row4":
//       return "row3";
//     case this.props.currentRow === "row5":
//       return "row4";
//     case this.props.currentRow === "row6":
//       return "row5";
//     default:
//       return null;
//   }
// };
