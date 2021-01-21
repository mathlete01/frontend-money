import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
import Intro from "./steps/Intro";
import LeftoverMoney from "./steps/LeftoverMoney";
import Four01k from "./steps/Four01k";
import Four01kMatch from "./steps/Four01kMatch";
import Four01kContribution from "./steps/Four01k_Contribution";
import CreditCardDebtQuestion from "./steps/CreditCardDebtQuestion";
import CreditCardDebt from "./steps/CreditCardDebt";
import Rung1Determination from "./steps/Rung1Determination";
import DoneForNow from "./steps/DoneForNow";
import RothIRA from "./steps/RothIRA";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { getCurrentUser} from "../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
      <React.Fragment>
        <Intro
          handleNextStep={this.handleNextStep}
        />
        <LeftoverMoney
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01k
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
        <DoneForNow
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothIRA
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(`state = `, state)
  return {
    currentStep: state.currentStep,
    // currentUser: state.currentUser
  };
};

// export default connect(mapStateToProps, { updateCurrentStep, getCurrentUser })(MasterForm);
export default connect(mapStateToProps, { updateCurrentStep })(MasterForm);

