let state;

// REDUCER IS THE DEPT. Reducers   take in the most recent set of data they have produced (like the previous list of claims), and take in the form and then they did some action or made some change to that existing data depending upon the contents of the Form.

// STATE IS THE COMPILED DEPT DATA. After all our Depts did some operation and produced a new list of data, all that information that came out of those Depts was compiled into a big repository of all the data of our company, which is where our CEO could go to see all the data that belongs to our company. That compiled dept data is equivilent to State.

// Set initial value of State for when it's initialized  
export function stepReducer( state = { currentStep: "Intro", },action) {
  switch (action.type) {
    case "UPDATE_STEP":
      return {
        // We use the spread operator to create new version of State so that Redux knows a change has occurred inside the Reducer. If it was the exact same object in momory, Redux would conclude that no change had occurred. if we want to make any change to State, we have to return a NEW object with the new data inside of it to trigger that change.
        ...state,
        // 
        currentStep: action.newStep,
      };
    default:
      return state;
  }
}

export default stepReducer;
