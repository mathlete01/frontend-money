import React, { Component } from "react";
import store from "../../app/store";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/navigation";

class LeftoverMoney extends React.Component {
  saveIncomeBills = (income, bills) => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;

    let formData = {
      id: this.props.currentUser,
      monthly_income: income,
      monthly_bills: bills,
      leftover_money: income - bills,
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
      // .then((obj) => console.log(obj))
      .catch((errors) => console.log(`saveIncomeBills: ${errors}`));
  };

  _next = () => {
    let income = document.getElementById("monthly_income");
    let bills = document.getElementById("monthly_bills");
    this.saveIncomeBills(income.value, bills.value);
    this.props.handleNextStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "LeftoverMoney") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>
          How much money do you have every month to put towards your goals?
        </h2>
        <label htmlFor="monthly_income">Monthly Income</label>
        <input
          className="form-control"
          id="monthly_income"
          name="monthly_income"
          type="number"
          // placeholder="3000"
          defaultValue="3000"
        />
        <label htmlFor="monthly_bills">Monthly Bills</label>
        <input
          className="form-control"
          id="monthly_bills"
          name="monthly_bills"
          type="number"
          defaultValue="1000"
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
  };
};

export default connect(mapStateToProps, { updateCurrentStep })(LeftoverMoney);
