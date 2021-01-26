export const updateCurrentStep = (nextStep) => {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_STEP",
            newStep: nextStep
        })
    }
}
