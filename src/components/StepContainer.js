import React from "react";
import Intro from "./steps/Intro";
import LeftoverMoney from "./steps/LeftoverMoney";
import Four01kQuestion from "./steps/Four01kQuestion";
import Four01kMatch from "./steps/Four01kMatch";
import Four01kContribution from "./steps/Four01k_Contribution";
import CreditCardDebtQuestion from "./steps/CreditCardDebtQuestion";
import CreditCardDebt from "./steps/CreditCardDebt";
import Rung1Determination from "./steps/Rung1Determination";
import SaveYourWork from "./steps/SaveYourWork";
import RothIRA from "./steps/RothIRA";
import Single from "./steps/Single";
import SingleMax from "./steps/SingleMax";
import BLANK from "./steps/BLANK";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import Container from "react-bootstrap/Container";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevStep: "",
      path: [],
    };
  }

  handleNextStep = (nextStep) => {
    this.setState({
      path: [...this.state.path, nextStep],
    });
    this.props.updateCurrentStep(nextStep);
  };

  handlePrevStep = () => {
    const i = this.state.path.length;
    this.setState((prevState) => ({
      path: prevState.path.filter((_, i) => i !== this.state.path.length - 1),
    }));
    const last = this.state.path.length - 2;
    this.props.updateCurrentStep(this.state.path[last]);
  };


  render() {
    return (
      // <React.Fragment>
      <Container>
        <Intro
          handleNextStep={this.handleNextStep}
        />
        <LeftoverMoney
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kQuestion
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kMatch
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kContribution
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebtQuestion
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebt
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Rung1Determination
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SaveYourWork
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothIRA
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Single
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleMax
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        </Container>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
  };
};


export default connect(mapStateToProps, { updateCurrentStep })(MasterForm);

