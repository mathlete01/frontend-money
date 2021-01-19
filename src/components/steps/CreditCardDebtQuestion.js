import React, { Component } from "react";

class Four01k extends React.Component {

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
    if (this.props.currentStep !== "CreditCardDebtQuestion") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>Do you have any credit card debt?</h2>
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

export default Four01k;
