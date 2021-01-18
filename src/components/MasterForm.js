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
      prevStep: "",
      path: [],
    };
  }

  handleNextStep = (nextStep) => {
    // console.log("handleNextStep called");
    this.setState({
      path: [...this.state.path, nextStep],
    });
    // console.log(`this.state.path = ${this.state.path}`);
    this.props.updateCurrentStep(nextStep);
  };

  handlePrevStep = () => {
    console.log("handlePrevStep called");
    let i = this.state.path.length;
    this.setState((prevState) => ({
      path: prevState.path.filter((_, i) => i !== this.state.path.length - 1),
    }));
    // console.log(`this.state.path = ${this.state.path}`);
    let last = this.state.path.length - 2
    // console.log(`last = ${last}`);
    this.props.updateCurrentStep(this.state.path[last])
  };

  setCurrentUser = (obj) => {
    this.setState({
      CURRENT_USER: obj.id,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Advise-o-matic 💵</h1>
        <Intro
          currentStep={this.props.currentStep}
          handleNextStep={this.handleNextStep}
          setCurrentUser={this.setCurrentUser}
        />
        <LeftoverMoney
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleNextStep={this.handleNextStep}
        />
        <Four01k
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleNextStep={this.handleNextStep}
        />
        <Four01kMatch
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleNextStep={this.handleNextStep}
        />
        <Four01kContribution
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebt
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          CURRENT_USER={this.state.CURRENT_USER}
          handleNextStep={this.handleNextStep}
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
