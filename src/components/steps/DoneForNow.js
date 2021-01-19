import React, { Component } from "react";

class DoneForNow extends React.Component {
  _prev = () => {
    // this.props.handlePrevStep("LeftoverMoney");
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.handleNextStep("CreditCardDebt");
  };

  _no = () => {
    this.props.handleNextStep("Determination");
  };

  render() {
    if (this.props.currentStep !== "DoneForNow") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Save your work</h2>
          <p>Let's save your work now so you can come back here for your next goal!</p>
        </div>
        <div className="form-group">
        <button
            className="btn btn-primary float-right"
            type="button"
            onClick={this._next}
          >
            Okay
          </button>
        </div>
        <div className="form-group">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this._prev}
          >
            Previous
          </button>
        </div>
      </div>
    );
  }
}

export default DoneForNow;
