import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { getCurrentUser, updateCurrentUser } from "../../actions/userActions";

class CreditCardDebt extends React.Component {
  _next = () => {
    let cc_1 = document.getElementById("cc_1");
    let cc_2 = document.getElementById("cc_2");
    let cc_3 = document.getElementById("cc_3");
    const sum = parseInt(cc_1) + parseInt(cc_2) + parseInt(cc_3);
    // this.saveCreditCardDebt(cc_1.value, cc_2.value, cc_3.value);
    console.log(`*** this.props.userObject.id = `, this.props.userObject.id)
    console.log(`*** this.props.userObject = `, this.props.userObject)
    // console.log(`*** this.props.userObject.id = `, this.props.userObject.id)
    // this.props.updateCurrentUser(this.props.userObject.id, {credit_card_debt: this.sum})
    this.props.updateCurrentUser(this.props.userObject.id, {credit_card_debt: this.sum})
    // this.props.getUserObject();
    this.props.handleNextStep("Rung1Determination");
  };

  _prev = () => {
    this.props.handlePrevStep();
  };

  render() {
    if (this.props.currentStep !== "CreditCardDebt") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
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
  // console.log(`state = `, state)
  return {
    currentStep: state.currentStep,
    userID: state.userID,
    userObject: state.userObject
  };
};

export default connect(mapStateToProps, { updateCurrentStep, getCurrentUser, updateCurrentUser })(CreditCardDebt);
