
// ACTION IS THE FORM. Action has a type and a payload. The action will be used to decide how to change the data in the Redux store, just as the form is used to decide how to change the data produced by the various depts (Claims, Accounting, Policy) at the insurance company.

// DISPATCH IS THE FORMS RECEIVER. Dispatch function takes an action and forwards it on to all the different Reducers. Dispatch funciton is equivilent to the Form Receiver that takes the form and delivers it to all the different depts.

export const updateCurrentStep = (nextStep) => { // Action Creator (people droppig off forms)
    return (dispatch) => {  // Action (the form)
        dispatch({
            type: "UPDATE_STEP",
            newStep: nextStep
        })
        
    }
}
