import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/navigation";

class MasterForm extends React.Component {
  handleStepChange = (nextStep) => {
    this.props.updateCurrentStep(nextStep);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Advise-o-matic 💵</h1>
        <Step0
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
        //   email={this.props.email}
        />
        <Step1
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
          email={this.props.email}
        />
        <Step2
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
          username={this.props.username}
        />
        <Step3
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
          password={this.props.password}
        />
        <Step4
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
          password={this.props.password}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.currentStep,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentStep: () => {
      dispatch(updateCurrentStep());
    },
  };
};

export default connect(mapStateToProps, { updateCurrentStep })(MasterForm);
// export default connect(mapStateToProps, mapDispatchToProps)(MasterForm);
