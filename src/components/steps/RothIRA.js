import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";

class RothIRA extends React.Component {
  
  _next = () => {
    this.props.handleNextStep("Single");
  };
  
  _prev = () => {
    this.props.handlePrevStep();
  };

  render() {
    if (this.props.currentStep !== "RothIRA") {
      return null;
    }

    return (
      <div className="form-group">
        <div className="form-group">
          <h2>Rung #3: Max-out a Roth IRA</h2>
          <p>Roth IRAs are great for a number of reasons. The best thing about them is that, because you can withdraw your contributions at any time for any reason, they're like a piggy bank you can break in an emergency. Even if you don't qualify for a Roth IRA because of age or income, you can still open a Roth IRA using a totally legal loophole called a "Backdoor Roth IRA". We'll cross that bridge if we need to, but let's see if you qualify first.</p>
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

export default connect(mapStateToProps, { updateCurrentStep, updateCurrentUser })(RothIRA);