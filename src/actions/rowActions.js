
export const updateCurrentRow = (nextRow) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_ROW",
            newRow: nextRow
        })
    }
}