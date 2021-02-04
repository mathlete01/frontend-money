import React from "react";
import CreditCardDebt from "./steps/CreditCardDebt";
import CreditCardDebtQ from "./steps/CreditCardDebtQ";
import DoneForNow from "./steps/DoneForNow";
import RothSingleIncomeQ from "./steps/RothSingleIncomeQ";
import RothMarriedJointlyQ from "./steps/RothMarriedJointlyQ";
import Four01kContribution from "./steps/Four01k_Contribution";
import Four01kMatch from "./steps/Four01kMatch";
import Four01kMaxOutQ from "./steps/Four01kMaxOutQ";
import Four01kQ from "./steps/Four01kQ";
import Intro from "./steps/Intro";
import LeftoverMoney from "./steps/LeftoverMoney";
import RothMarriedJointlyMinQ from "./steps/RothMarriedJointlyMinQ";
import RothMarriedJointlyMaxQ from "./steps/RothMarriedJointlyMaxQ";
import RothMarriedJointlyIncomeQ from "./steps/RothMarriedJointlyIncomeQ";
import RothMarriedJointly50Q from "./steps/RothMarriedJointly50Q";
import RothIntro from "./steps/RothIntro";
import SaveYourWork from "./steps/SaveYourWork";
import RothSingle50Q from "./steps/RothSingle50Q";
import RothSingleMinQ from "./steps/RothSingleMinQ";
import RothSingleMaxQ from "./steps/RothSingleMaxQ";
import RothSingleOverD from "./steps/RothSingleOverD";
import RothSingleUnderD from "./steps/RothSingleUnderD";
import RothMarriedNotJointlyMinQ from "./steps/RothMarriedNotJointlyMinQ";
import RothMarriedNotJointlyOverD from "./steps/RothMarriedNotJointlyOverD";
import RothSingleQ from "./steps/RothSingleQ";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";
import Container from "react-bootstrap/Container";
import RothMarriedJointlyOverD from "./steps/RothMarriedJointlyOverD";
import MoreToSpendQ from "./steps/MoreToSpendQ";
import Rung1Step from "./steps/Rung1Step";
import S_BackdoorRothIntro from "./steps/S_BackdoorRothIntro"

class StepContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevStep: "",
      path: [],
    };
  }

  handleNextStep = (nextStep) => {
    console.log(`StepContainer: handleNextStep: nextStep = `, nextStep)
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
      <Container className="stepContainer">
        <Rung1Step
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
          nextStep={this.props.nextStep}
        />
        <RothSingle50Q
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <CreditCardDebt
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <CreditCardDebtQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <DoneForNow
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothSingleIncomeQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedJointlyQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothSingleMaxQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <Four01kContribution
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <Four01kMatch
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <Four01kMaxOutQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <Four01kQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <Intro
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <LeftoverMoney
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedJointlyMinQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedJointlyMaxQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />

        <RothIntro
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />

        <SaveYourWork
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />

        <RothSingleMinQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothSingleOverD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />

        <RothSingleUnderD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothSingleQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedJointlyIncomeQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedJointly50Q
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedNotJointlyMinQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <RothMarriedNotJointlyOverD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />

        <RothMarriedJointlyOverD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />

        <MoreToSpendQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
        <S_BackdoorRothIntro
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
          handleNextDirective={this.props.handleNextDirective}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(StepContainer);
