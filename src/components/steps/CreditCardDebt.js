import React, { Component } from "react";

class CreditCardDebt extends React.Component {

  _next = () => {
    let cc_1 = document.getElementById("cc_1")
    let cc_2 = document.getElementById("cc_2")
    let cc_3 = document.getElementById("cc_3")
    this.saveCreditCardDebt(cc_1.value, cc_2.value, cc_3.value)
    this.props.handleNextStep("Rung1Determination");
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  saveCreditCardDebt = (cc_1, cc_2, cc_3) => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    console.log(cc_1, cc_2, cc_3)
    let sum = parseInt(cc_1) + parseInt(cc_2) + parseInt(cc_3);
    console.log(`sum = ${sum}`)
    let formData = {
      id: this.props.currentUser,
      credit_card_debt: sum,
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
      .catch((errors) => console.log(`saveCreditCardDebt: ${errors}`));
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebt") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>How much credit card debt do you have?</h2>
        <label>Card #1</label>
        <input
          className="form-control"
          id="cc_1"
          name="cc_1"
          type="number"
          defaultValue="2000"
        />
        <label>Card #2</label>
        <input
          className="form-control"
          id="cc_2"
          name="cc_2"
          type="number"
          defaultValue="400"
        />
        <label>Card #3</label>
        <input
          className="form-control"
          id="cc_3"
          name="cc_3"
          type="number"
          defaultValue="800"
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

export default CreditCardDebt;
