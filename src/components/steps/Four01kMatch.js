import React, { Component } from "react";

class Four01kMatch extends React.Component {

  saveFour01kMatch = (match) => {
    // match = match/100
    console.log(match)
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    let formData = {
      id: this.props.CURRENT_USER,
      four01k_match: match,
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
      .catch((errors) => console.log(`saveFour01kMatch: ${errors}`));
  };

  _next = () => {
    let match = document.getElementById("employer_match")
    this.saveFour01kMatch(match.value)
    this.props.handleStepChange("Four01kContribution")
  };

  _prev = () => {
    this.props.handleStepChange("Four01k")
  };

  render() {
    if (this.props.currentStep !== "Four01kMatch") {
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
          type="float"
          defaultValue="3"
          // value={this.props.employer_match} // Prop: The email input data
          // onChange={this.props.handleStepChange} // Prop: Puts data into state
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

export default Four01kMatch;
