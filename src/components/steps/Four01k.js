import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class Four01k extends React.Component {

  _prev = () => {
    this.props.handlePrevStep();
  };

  _yes = () => {
    this.props.updateCurrentUser(this.props.userObject.id, {four01k: true})
    this.props.handleNextStep("Four01kMatch");
  };

  _no = () => {
    this.props.updateCurrentUser(this.props.userObject.id, {four01k: false})
    this.props.handleNextStep("CreditCardDebtQuestion");
  };

  render() {
    if (this.props.currentStep !== "Four01k") {
      return null;
    }
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Does your job happen to offer a 401(k) plan?</h2>
          <p>A 401(k) plan is a retirement investment account that many companies offer their employees.</p>
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

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(Four01k);
