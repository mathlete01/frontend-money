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
import RothRegD from "./steps/RothRegD";
import RothIntro from "./steps/RothIntro";
import RothMaxD from "./steps/RothMaxD";
import Rung1Determination from "./steps/Rung1Determination";
import SaveYourWork from "./steps/SaveYourWork";
import RothSingleTweenD from "./steps/RothSingleTweenD";
import RothSingle50Q from "./steps/RothSingle50Q";
import RothSingleMinQ from "./steps/RothSingleMinQ";
import RothSingleMaxQ from "./steps/RothSingleMaxQ";
import RothSingleOverD from "./steps/RothSingleOverD";
import RothSingleUnderD from "./steps/RothSingleUnderD";
import RothMarriedNotJointlyTweenD from "./steps/RothMarriedNotJointlyTweenD";
import RothMarriedNotJointlyMinQ from "./steps/RothMarriedNotJointlyMinQ";
import RothMarriedNotJointlyOverD from "./steps/RothMarriedNotJointlyOverD";
import BackdoorRothIntro from "./steps/BackdoorRothIntro";
import RothSingleQ from "./steps/RothSingleQ";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";
import Container from "react-bootstrap/Container";
import RothMarriedJointlyTweenD from "./steps/RothMarriedJointlyTweenD";
import RothMarriedJointlyOverD from "./steps/RothMarriedJointlyOverD";
import Four01kMaxRec from "./steps/Four01kMaxRec";
import TaxableBrokerageIntro from "./steps/TaxableBrokerageIntro";
import MoreToSpendQ from "./steps/MoreToSpendQ";


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
      <Container>
        <RothSingle50Q
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebt
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebtQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <DoneForNow
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothSingleIncomeQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointlyQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothSingleMaxQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kContribution
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kMatch
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kMaxOutQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Intro handleNextStep={this.handleNextStep} />
        <LeftoverMoney
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointlyMinQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointlyMaxQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
      
        <RothRegD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothIntro
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMaxD
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
        <RothSingleTweenD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothSingleMinQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothSingleOverD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedNotJointlyTweenD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <BackdoorRothIntro
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
         <RothSingleUnderD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothSingleQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointlyIncomeQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointly50Q
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedNotJointlyMinQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedNotJointlyOverD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <TaxableBrokerageIntro
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kMaxRec
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointlyOverD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMarriedJointlyTweenD
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <MoreToSpendQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
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
})(MasterForm);
