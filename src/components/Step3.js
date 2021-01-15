import React, { Component } from "react";

class Step3 extends React.Component {

  _next = () => {
    this.props.handleChange("Step4")
  };

  _prev = () => {
    this.props.handleChange("Step2")
  };

  render() {
    if (this.props.currentStep !== "Step3") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
          <h2>How much is the employer match?</h2>
        {/* <label htmlFor="employer_match">Employer Match</label> */}
        <label >Employer Match</label>
        <input
          className="form-control"
          id="employer_match"
          name="employer_match"
          type="number"
          placeholder="3%"
          value={this.props.employer_match} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
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

export default Step3;
