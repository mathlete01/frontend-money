import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import Intro from "./steps/Intro";
import LeftoverMoney from "./steps/LeftoverMoney";
import Four01k from "./steps/Four01k";
import Four01kMatch from "./steps/Four01kMatch";
import Four01kContribution from "./steps/Four01k_Contribution";
import CreditCardDebt from "./steps/CreditCardDebt";
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
        <LeftoverMoney
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <Four01k
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <Four01kMatch
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <Four01kContribution
          currentStep={this.props.currentStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleStepChange={this.handleStepChange}
        />
        <CreditCardDebt
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
