import React, { Component } from "react";
import store from "../app/store";
import { connect } from "react-redux" 
import { updateCurrentStep } from "../actions/navigation"

class Step1 extends React.Component {

  _next = () => {
    this.props.handleChange("Step2")
  };

  render() {
    if (this.props.currentStep !== "Step1") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>How much money do you have every month to put towards your goals?</h2>
        <label htmlFor="monthly_income">Monthly Income</label>
        <input
          className="form-control"
          id="monthly_income"
          name="monthly_income"
          type="integer"
          placeholder="3000"
          value={this.props.monthly_income} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <label htmlFor="monthly_bills">Monthly Bills</label>
        <input
          className="form-control"
          id="monthly_bills"
          name="monthly_bills"
          type="integer"
          placeholder="1000"
          value={this.props.monthly_bills} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
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

const mapStateToProps = (state) => {
  return {
    currentStep: state.currentStep,
  }
}

export default connect(mapStateToProps, { updateCurrentStep })(Step1);
