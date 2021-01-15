import React, { Component } from "react";

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>How much is the employer match?</h2>
        <label htmlFor="monthly_income">Percentage</label>
        <input
          className="form-control"
          id="four01k_match"
          name="four01k_match"
          type="number"
          size="2"
          maxlength="2"
          placeholder="3%"
          value={this.props.four01k_match} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
      </div>
    );
  }
}

export default Step3;
