import React, { Component } from "react";

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;
let currentUser = ""

class Rung1Determination extends React.Component {
  
  _next = () => {
    // this.props.handleNextStep("LeftoverMoney");
    this.props.monthsToPayOffDebt()
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

//   doMath(){

//   }

  render() {
    if (this.props.currentStep !== "Rung1Determination") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
        
      <div className="form-group" >
        <h2>Here's the deal...</h2>
        <p>
        Hello, {this.props.monthsToPayOffDebt()}!
        </p>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Rung1Determination;
