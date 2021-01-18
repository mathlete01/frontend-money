import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import Intro from "./steps/Intro";
import IncomeMinusBills from "./steps/IncomeMinusBills";
import Four01kPlan from "./steps/Four01kPlan";
import EmployerMatch from "./steps/EmployerMatch";
import CCardDebt from "./steps/CCardDebt";
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
        <Intro
          currentStep={this.props.currentStep}
          handleStepChange={this.handleStepChange}
          setCurrentUser={this.setCurrentUser}
        />
        <IncomeMinusBills
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <Four01kPlan
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <EmployerMatch
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <CCardDebt
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
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
