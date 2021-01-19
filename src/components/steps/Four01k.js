import React, { Component } from "react";

class Four01k extends React.Component {
  saveFour01k = (bool) => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    let formData = {
      id: this.props.currentUser,
      four01k: bool,
    };

    let configOb = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(USERS_URL, configOb)
      .then((res) => res.json())
      .then((obj) => console.log(obj))
      .catch((errors) => console.log(`saveFour01k: ${errors}`));
  };

  _prev = () => {
    // this.props.handlePrevStep("LeftoverMoney");
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.saveFour01k(true);
    this.props.handleNextStep("Four01kMatch");
  };

  _no = () => {
    this.saveFour01k(false);
    this.props.handleNextStep("CreditCardDebtQuestion");
  };

  render() {
    if (this.props.currentStep !== "Four01k") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Does your job happen to offer a 401(k) plan?</h2>
          <p>A 401(k) plan is a retirement investment account that many companies offer their employees.</p>
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

export default Four01k;
