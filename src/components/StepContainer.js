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
import BLANK from "./steps/BLANK";

class StepContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevStep: "",
      path: [],
      row1: "Intro",
      row2: "",
      row3: "",
      currentRow: "row1",
    };
  }

  setRow = (row) => {
    this.setState({
      currentRow: row,
    });
  };

  clearRow = (row) => {
    console.log(`clearRow called `)
    switch (true) {
      case row === "row2":
        console.log(`clearRow: 2 called `)
        return this.setState({
          row2: "",
        });
        break;
      case row === "row3":
        console.log(`clearRow: 2 called `)
        return this.setState({
          row3: "",
        });
        break;
    }
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
    const i = this.state.path.length;
    this.setState((prevState) => ({
      path: prevState.path.filter((_, i) => i !== this.state.path.length - 1),
    }));
    const last = this.state.path.length - 2;
    this.props.updateCurrentStep(this.state.path[last]);
    this.setState({ [this.state.currentRow]: this.state.path[last] });
  };

  loadChildInRow1 = () => {
    switch (true) {
      case this.state.row1 === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row1 === "Rung1Determination":
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
    switch (true) {
      case this.state.row2 === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
            clearRow={this.clearRow}
          />
        );
        break;
      case this.state.row2 === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "BackdoorRothIntro":
        return (
          <BackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothSingleTweenD":
        return (
          <RothSingleTweenD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2 === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothRegD":
        return (
          <RothRegD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2 === "RothMaxD":
        return (
          <RothMaxD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2 === "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedNotJointlyTweenD":
        return (
          <RothMarriedNotJointlyTweenD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2 === "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyTweenD":
        return (
          <RothMarriedJointlyTweenD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row2 === "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
          />
        );
        break;
      case this.state.row2 === "TaxableBrokerageIntro":
        return (
          <TaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
    }
  };

  loadChildInRow3 = () => {
    switch (true) {
      case this.state.row3 === "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
            clearRow={this.clearRow}
          />
        );
        break;
      case this.state.row3 === "TaxableBrokerageIntro":
        return (
          <TaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
      case this.state.row3 === "BackdoorRothIntro":
        return (
          <BackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
    }
  };

  loadChildInRow4 = () => {
    switch (true) {
      case this.state.row4 === "BLANK":
        return (
          <BLANK
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
    }
  };

  loadChildInRow5 = () => {
    switch (true) {
      case this.state.row5 === "BLANK":
        return (
          <BLANK
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            setChild={this.setChild}
            setRow={this.setRow}
          />
        );
        break;
    }
  };

  render() {
    return (
      <Container className="stepContainer">
        <Row name="row1" id="row1" className="row1">
          {this.loadChildInRow1()}
        </Row>
        <Row name="row2" id="row2" className="row2">
          {this.loadChildInRow2()}
        </Row>
        <Row name="row3" id="row3" className="row3">
          {this.loadChildInRow3()}
        </Row>
        <Row name="row4" id="row4" className="row4">
          {this.loadChildInRow4()}
        </Row>
        <Row name="row5" id="row5" className="row5">
          {this.loadChildInRow5()}
        </Row>
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
