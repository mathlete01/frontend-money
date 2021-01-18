import React, { Component } from "react";

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;

class Four01kPlan extends React.Component {

  saveFour01k = (bool) => {
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
    this.props.handleStepChange("IncomeMinusBills");
  };

  _yes = () => {
    this.saveFour01k(true);
    this.props.handleStepChange("EmployerMatch");
  };

  _no = () => {
    this.saveFour01k(false);
    this.props.handleStepChange("CCardDebt");
  };

  render() {
    if (this.props.currentStep !== "Four01kPlan") {
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

export default Four01kPlan;
