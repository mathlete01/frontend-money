export const updateCurrentStep = (nextStep) => {
    console.log("2--updateCurrentStep called")
    console.log(`nextStep = `, nextStep)
    return (dispatch) => {
        dispatch({
            type: "UPDATE_STEP",
            newStep: nextStep
        })
        
    }
}
