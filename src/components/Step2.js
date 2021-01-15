import React, { Component } from "react";

class Step2 extends React.Component {

  _prev = () => {
    this.props.handleChange("Step1")
  };
  
  _yes = () => {
    this.props.handleChange("Step3")
  };

  _no = () => {
    this.props.handleChange("Step4")
  };

  render() {
    if (this.props.currentStep !== "Step2") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>Does your job happen to offer a 401(k) plan?</h2>
        <button className="btn btn-secondary" type="button" onClick={this._yes}>
          Yes
        </button>
        <button className="btn btn-secondary" type="button" onClick={this._no}>
          No
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      </div>
    );
  }
}

export default Step2;
