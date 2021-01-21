import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class Four01kMatch extends React.Component {

  _next = () => {
    let match = document.getElementById("employer_match");
    this.props.updateCurrentUser(this.props.currentUser.id, {four01k_match: match.value})
    this.props.handleNextStep("Four01kContribution");
  };

  _prev = () => {
    this.props.handlePrevStep("Four01k");
  };

  render() {
    if (this.props.currentStep !== "Four01kMatch") {
      return null;
    }
    return (
      <div className="form-group">
        <div className="form-group">
          <h2>How much is the employer match?</h2>
          {/* <label htmlFor="employer_match">Employer Match</label> */}
          <div className="form-group"></div>
          <label>Employer Match</label>
          <input
            className="form-control"
            id="employer_match"
            name="employer_match"
            type="float"
            defaultValue="3"
            // value={this.props.employer_match} // Prop: The email input data
            // onChange={this.props.handleNextStep} // Prop: Puts data into state
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

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(Four01kMatch);

