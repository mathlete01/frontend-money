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
  constructor(props) {
    super(props);
    this.state = {
      CURRENT_USER: "",
    };
  }

  handleStepChange = (nextStep) => {
    this.props.updateCurrentStep(nextStep);
    // this.props.dispatch({
    //   type: 'UPDATE_STEP'
    // })
  };

  setCurrentUser = (obj) => {
    this.setState({
      CURRENT_USER: obj.id,
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Advise-o-matic 💵</h1>
        <Step0
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
          setCurrentUser={this.setCurrentUser}
        />
        <Step1
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <Step2
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
        />
        <Step3
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
        />
        <Step4
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
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
// export default connect(mapStateToProps)(MasterForm);
// export default connect(mapStateToProps, mapDispatchToProps)(MasterForm);
