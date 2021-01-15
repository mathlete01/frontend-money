import React, { Component } from "react";

class Step4 extends React.Component {
  render() {
    if (this.props.currentStep !== 4) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
          <h2>Do you have any credit card debt</h2>
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
      </div>
    );
  }
}

export default Step4;
