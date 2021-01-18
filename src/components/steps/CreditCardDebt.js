import React, { Component } from "react";

class CreditCardDebt extends React.Component {

  _next = () => {
    this.props.handleNextStep("Step5")
  };

  _prev = () => {
    this.props.handlePrevStep("Four01k")
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebt") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>How much credit card debt do you have?</h2>
        <label>Card #1</label>
        <input
          className="form-control"
          id="cc_1"
          name="cc_1"
          type="number"
          // placeholder="3000"
          defaultValue="2000"
        />
        <label>Card #2</label>
        <input
          className="form-control"
          id="cc_2"
          name="cc_2"
          type="number"
          defaultValue="400"
        />
        <label>Card #3</label>
        <input
          className="form-control"
          id="cc_3"
          name="cc_3"
          type="number"
          defaultValue="800"
        />
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

export default CreditCardDebt;
