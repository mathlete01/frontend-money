import React, { Component } from "react";

class CreditCardDebtQuestion extends React.Component {
  _prev = () => {
    // this.props.handlePrevStep("LeftoverMoney");
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.handleNextStep("CreditCardDebt");
  };

  _no = () => {
    this.props.handleNextStep("Rung1Determination");
    // this.saveCreditCardDebt();
    this.props.updateCurrentUser(this.props.userObject.id, {credit_card_debt: 0})
    this.props.getUserObject();
  };

  // saveCreditCardDebt = () => {
  //   const BASE_URL = "http://localhost:3000";
  //   const USERS_URL = `${BASE_URL}/users`;

  //   let sum = 0;
  //   let formData = {
  //     id: this.props.userObject.id,
  //     credit_card_debt: sum,
  //   };

  //   let configOb = {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   };

  //   fetch(USERS_URL, configOb)
  //     .then((res) => res.json())
  //     .then((obj) => console.log(obj))
  //     .catch((errors) => console.log(`saveCreditCardDebt: ${errors}`));
  // };

  render() {
    if (this.props.currentStep !== "CreditCardDebtQuestion") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Do you have any credit card debt?</h2>
          <p>The interest you pay on credit card debt is often 3 times the amount of interest you get from investments.</p>
        </div>
        <div className="form-group">
          <button
            className="btn btn-secondary float-right"
            type="button"
            onClick={this._yes}
          >
            Yes
          </button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this._no}
          >
            No
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

export default CreditCardDebtQuestion;
