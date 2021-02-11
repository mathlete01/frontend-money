let state;

export function rowReducer( state = { currentRow: "row1", }, action) {
    switch (action.type) {
        case "UPDATE_ROW":
            return {
                ...state,
                currentRow: action.newRow,
            };
        default:
            return state;
    }
}

export default rowReducer