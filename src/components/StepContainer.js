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
import Parent5 from "./Parent5";
import Row from "react-bootstrap/Row";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

class StepContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevStep: "",
      path: [],
      row1Child: "Intro",
      row2Child: "",
      currentRow: "row1Child",
    };
  }

  setRow = (row) => {
    this.setState({
      currentRow: row,
    });
  };

  setChild = (event) => {
    // from handleNextStep below
    const nextStep = event.target.value;
    this.setState({
      path: [...this.state.path, nextStep],
    });
    this.props.updateCurrentStep(nextStep);
    // above
    var stateObject = function () {
      var returnObj = {};
      returnObj[this.target.id] = this.target.value;
      return returnObj;
    }.bind(event)();
    this.setState({ [event.target.id]: event.target.value });
  };

  handlePrevStep = () => {
    console.log("handlePrevStep called")
    console.log(`this.state.currentRow = `, this.state.currentRow)
    const i = this.state.path.length;
    this.setState((prevState) => ({
      path: prevState.path.filter((_, i) => i !== this.state.path.length - 1),
    }));
    const last = this.state.path.length - 2;
    this.props.updateCurrentStep(this.state.path[last]);
    // console.log(`handlePrevStep: this.state.path[last] = `, this.state.path[last])
    this.setState({ [this.state.currentRow]: this.state.path[last] });
  };

  loadChildInRow1 = () => {
    // console.log("loadChildInRow1 called");
    // console.log(`this.state.row1Child = `, this.state.row1Child);
    switch (true) {
      case this.state.row1Child === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1Child === "Rung1Determination":
        return (
          <Rung1Determination
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
    }
  };

  loadChildInRow2 = () => {
    // console.log("loadChildInRow2 called");
    switch (true) {
      case this.state.row2Child === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2Child === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
        case this.state.row2Child === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
        case this.state.row2Child === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2Child === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
    }
  };

  // handleNextStep = (nextStep) => {
  //   this.setState({
  //     path: [...this.state.path, nextStep],
  //   });
  //   this.props.updateCurrentStep(nextStep);
  // };

  render() {
    return (
      <Container className="stepContainer">
        <Row name="row1" id="row1" className="row1">
          {this.loadChildInRow1()}
        </Row>
        
        <Row name="row2" id="row2" className="row2">
          {this.loadChildInRow2()}
        </Row>
        {/* <Intro handleNextStep={this.handleNextStep} setChild={this.setChild} /> */}
        {/* <Parent5 /> */}
        {/* <RothSingle50Q
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <CreditCardDebt
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <CreditCardDebtQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <DoneForNow
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
        /> */}
        {/* <Four01kContribution
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <Four01kMatch
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <Four01kMaxOutQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <Four01kQ
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}

        {/* <LeftoverMoney
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <RothMarriedJointlyMinQ
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
        /> */}

        {/* <Rung1Determination
          handlePrevStep={this.handlePrevStep}
          handleNextStep={this.handleNextStep}
        /> */}
        {/* <SaveYourWork
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
        /> */}
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
