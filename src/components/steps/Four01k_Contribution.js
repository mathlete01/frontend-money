import React, { Component } from "react";

class Four01kContribution extends React.Component {

  saveFour01kContribution = (match) => {
    // match = match/100
    console.log(match)
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    let formData = {
      id: this.props.currentUser,
      four01k_contribution: match,
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
      .catch((errors) => console.log(`saveFour01kContribution: ${errors}`));
  };

  _next = () => {
    let match = document.getElementById("employee_contribution")
    this.saveFour01kContribution(match.value)
    this.props.handleNextStep("CreditCardDebtQuestion")
  };

  _prev = () => {
    this.props.handlePrevStep("Four01kMatch")
  };

  render() {
    if (this.props.currentStep !== "Four01kContribution") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
          <h2>What percentage are you contributing?</h2>
        <label >Employee Contribution</label>
        <input
          className="form-control"
          id="employee_contribution"
          name="employee_contribution"
          type="float"
          defaultValue="6"
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

export default Four01kContribution;
