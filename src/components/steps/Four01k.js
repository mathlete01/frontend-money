import React, { Component } from "react";

class Four01k extends React.Component {

  saveFour01k = (bool) => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    let formData = {
      id: this.props.CURRENT_USER,
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
    this.props.handleStepChange("LeftoverMoney");
  };

  _yes = () => {
    this.saveFour01k(true);
    this.props.handleStepChange("Four01kMatch");
  };

  _no = () => {
    this.saveFour01k(false);
    this.props.handleStepChange("CreditCardDebt");
  };

  render() {
    if (this.props.currentStep !== "Four01k") {
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

export default Four01k;
