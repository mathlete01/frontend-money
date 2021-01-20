import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class CreditCardDebt extends React.Component {
  _next = () => {
    let cc_1 = document.getElementById("cc_1");
    let cc_2 = document.getElementById("cc_2");
    let cc_3 = document.getElementById("cc_3");
    const sum = parseInt(cc_1.value) + parseInt(cc_2.value) + parseInt(cc_3.value);
    this.props.updateCurrentUser(this.props.userObject.id, {credit_card_debt: sum})
    this.props.handleNextStep("Rung1Determination");
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebt") {
      return null;
    }
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>How much credit card debt do you have?</h2>
        </div>
        <div className="form-group">
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
    userObject: state.userReducer.user
  };
};

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(CreditCardDebt);
