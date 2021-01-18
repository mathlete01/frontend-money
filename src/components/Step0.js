import React, { Component } from "react";
// import store from "../app/store";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/navigation";

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;
let CURRENT_USER = ""

class Step0 extends React.Component {
  
  _next = () => {
    this.props.handleStepChange("Step1");
    this.createUser();
  };

  createUser = () => {
    let formData = {
      email: "yourmom@mom.com",
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(USERS_URL, configObj)
      .then((res) => res.json())
      .then((data) => this.props.setCurrentUser(data))
      .catch((errors) => console.log(`createUser: ${errors}`));
  }



  render() {
    if (this.props.currentStep !== "Step0") {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>We're gonna walk you through a bunch of questions.</h2>
        <p>
          You'll be asked to enter a few numbers, but estimates are just fine.
          Sample numbers are provided, so you can also just go with those and
          correct them later if you'd like.{" "}
        </p>
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Let's go!
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

// export default connect(mapStateToProps, { updateCurrentStep })(Step0);
export default connect(mapStateToProps)(Step0);
