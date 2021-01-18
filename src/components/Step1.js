import React, { Component } from "react";
import store from "../app/store";
import { connect } from "react-redux" 
import { updateCurrentStep } from "../actions/navigation"

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;

const monthly_income = document.getElementById("monthly_income");

class Step1 extends React.Component {
  
  saveIncome = (value) => {
    console.log(`saveIncome:value = ${value}`);
    console.log(this.props.CURRENT_USER);
    let formData = {
      id: this.props.CURRENT_USER,
      monthly_income: value,
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
      .catch((errors) => console.log(`saveIncome: ${errors}`));
  }

  _next = () => {
    let income = document.getElementById("monthly_income")
    console.log(`monthly_income = ${income.value}`)
    this.saveIncome(income.value)
    this.props.handleStepChange("Step2")
  };

  render() {
    if (this.props.currentStep !== "Step1") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>How much money do you have every month to put towards your goals?</h2>
        <label htmlFor="monthly_income">Monthly Income</label>
        <input
          className="form-control"
          id="monthly_income"
          name="monthly_income"
          type="integer"
          placeholder="3000"
          // value={this.props.monthly_income} // Prop: The email input data
          // onChange={this.props.handleStepChange} // Prop: Puts data into state
        />
        <label htmlFor="monthly_bills">Monthly Bills</label>
        <input
          className="form-control"
          id="monthly_bills"
          name="monthly_bills"
          type="integer"
          placeholder="1000"
          value={this.props.monthly_bills} // Prop: The email input data
          // onChange={this.props.handleStepChange} // Prop: Puts data into state
        />
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

const mapStateToProps = (state) => {
  return {
    currentStep: state.currentStep,
  }
}

export default connect(mapStateToProps, { updateCurrentStep })(Step1);
