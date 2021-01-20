import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class LeftoverMoney extends React.Component {

  _next = () => {
    let income = document.getElementById("monthly_income");
    let bills = document.getElementById("monthly_bills");
    this.props.updateCurrentUser(this.props.userObject.id, {monthly_income: income.value, monthly_bills: bills.value})
    this.props.handleNextStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "LeftoverMoney") {
      return null;
    }
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>
            How much money do you have every month to put towards your goals? Note: Estimations are fine, you can always come back and update the numbers
          </h2>
        </div>
        <div className="form-group">
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
        </div>
        <div className="form-group">
          <button
            className="btn btn-primary float-right"
            type="button"
            onClick={this._next}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    userObject: state.userReducer.user
  };
};

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(LeftoverMoney);
