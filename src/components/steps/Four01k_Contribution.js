import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class Four01kContribution extends React.Component {

  _next = () => {
    let match = document.getElementById("employee_contribution");
    this.props.updateCurrentUser(this.props.currentUser.id, {four01k_contribution: match.value})
    this.props.handleNextStep("CreditCardDebtQuestion");
  };

  _prev = () => {
    this.props.handlePrevStep("Four01kMatch");
  };

  render() {
    if (this.props.currentStep !== "Four01kContribution") {
      return null;
    }
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>What percentage are you contributing?</h2>
        </div>
        <div className="form-group">
          <label>Employee Contribution</label>
          <input
            className="form-control"
            id="employee_contribution"
            name="employee_contribution"
            type="float"
            defaultValue="6"
          />
        </div>
        <div className="form-group">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(Four01kContribution);
