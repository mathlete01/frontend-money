import React, { Component } from "react";

class Single extends React.Component {
  
    saveSingle = (bool) => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    let formData = {
      id: this.props.userObject.id,
      single: bool,
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
      .catch((errors) => console.log(`saveSingle: ${errors}`));
  };

  _prev = () => {
    // this.props.handlePrevStep("LeftoverMoney");
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.saveSingle(true);
    // this.props.handleNextStep("SingleMatch");
  };

  _no = () => {
    this.saveSingle(false);
    // this.props.handleNextStep("CreditCardDebtQuestion");
  };

  render() {
    if (this.props.currentStep !== "Single") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Are you single?</h2>
          <p></p>
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

export default Single;
