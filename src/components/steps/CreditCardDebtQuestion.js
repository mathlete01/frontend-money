import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class CreditCardDebtQuestion extends React.Component {
  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.handleNextStep("CreditCardDebt");
  };

  _no = () => {
    this.props.handleNextStep("Rung1Determination");
    this.props.updateCurrentUser(this.props.userObject.id, {credit_card_debt: 0})
    // this.props.getUserObject();
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebtQuestion") {
      return null;
    }
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Do you have any credit card debt?</h2>
          <p>The interest you pay on credit card debt is often 3 times the amount of interest you get from investments.</p>
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

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    userObject: state.userReducer.user
  };
};

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(CreditCardDebtQuestion);