import React from "react";
import Below50RothSingle from "./steps/SingleRothAgeQuestion";
import CreditCardDebt from "./steps/CreditCardDebt";
import CreditCardDebtQuestion from "./steps/CreditCardDebtQuestion";
import DoneForNow from "./steps/DoneForNow";
import EarnedIncomeRothSingle from "./steps/EarnedIncomeRothSingle";
import FilingJointly from "./steps/FilingJointly";
import Four01kContribution from "./steps/Four01k_Contribution";
import Four01kMatch from "./steps/Four01kMatch";
import Four01kMaxOutQuestion from "./steps/Four01kMaxOutQuestion";
import Four01kQuestion from "./steps/Four01kQuestion";
import GoalMaxOut401k from "./steps/GoalMaxOut401k";
import Intro from "./steps/Intro";
import LeftoverMoney from "./steps/LeftoverMoney";
import MarriedBetween from "./steps/MarriedBetween";
import MarriedMax from "./steps/MarriedMax";
import Math from "./steps/Math";
import RothEligable from "./steps/RothEligable";
import RothIRA from "./steps/RothIRA";
import RothMax from "./steps/RothMax";
import RothRec from "./steps/RothRec";
import Rung1Determination from "./steps/Rung1Determination";
import SaveYourWork from "./steps/SaveYourWork";
import Single from "./steps/Single";
import SingleBelow50RothTable from "./steps/SingleBelow50RothTable";
import SingleRothAgeQuestion from "./steps/SingleRothAgeQuestion";
import SingleBetween from "./steps/SingleBetween";
import SingleMax from "./steps/SingleMax";
import SingleMaxNoRoth from "./steps/SingleMaxNoRoth";
import SingleRothCalc from "./steps/SingleRothCalc";
import TradIRAQuestion from "./steps/TradIRAQuestion";
// import BLANK from "./steps/BLANK";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";
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
      <Container>
        <Below50RothSingle
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebt
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebtQuestion
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <DoneForNow
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <EarnedIncomeRothSingle
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <FilingJointly
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
        <Four01kMaxOutQuestion
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Four01kQuestion
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <GoalMaxOut401k
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Intro handleNextStep={this.handleNextStep} />
        <LeftoverMoney
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <MarriedBetween
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <MarriedMax
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <Math
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothEligable
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothIRA
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothMax
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <RothRec
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
        <Single
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleBelow50RothTable
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleRothAgeQuestion
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleBetween
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleMax
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleMaxNoRoth
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <SingleRothCalc
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        />
        <TradIRAQuestion
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
