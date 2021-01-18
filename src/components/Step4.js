import React, { Component } from "react";

class Step4 extends React.Component {

  _next = () => {
    this.props.handleStepChange("Step5")
  };

  _prev = () => {
    this.props.handleStepChange("Step2")
  };

  render() {
    if (this.props.currentStep !== "Step4") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
          <h2>How much credit card debt do you have?</h2>
        <label htmlFor="monthly_income">CC 1</label>
        <input
          className="form-control"
          id="monthly_income"
          name="monthly_income"
          type="integer"
          placeholder="3000"
          value={this.props.monthly_income} // Prop: The email input data
          onChange={this.props.handleStepChange} // Prop: Puts data into state
        />
        <label htmlFor="monthly_bills">CC 2</label>
        <input
          className="form-control"
          id="monthly_bills"
          name="monthly_bills"
          type="integer"
          placeholder="1000"
          value={this.props.monthly_bills} // Prop: The email input data
          onChange={this.props.handleStepChange} // Prop: Puts data into state
        />
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

export default Step4;
