import React from "react";
import CreditCardDebt from "./steps/CreditCardDebt";
import CreditCardDebtQ from "./steps/CreditCardDebtQ";
import DoneForNow from "./steps/DoneForNow";
import RothSingleIncomeQ from "./steps/RothSingleIncomeQ";
import RothMarriedJointlyQ from "./steps/RothMarriedJointlyQ";
import Four01kContribution from "./steps/Four01kContribution";
import Four01kMatch from "./steps/Four01kMatch";
import Four01kMaxOutQ from "./steps/Four01kMaxOutQ";
import Four01kQ from "./steps/Four01kQ";
import Intro from "./steps/Intro";
import LeftoverMoney from "./steps/LeftoverMoney";
import RothMarriedJointlyMinQ from "./steps/RothMarriedJointlyMinQ";
import RothMarriedJointlyMaxQ from "./steps/RothMarriedJointlyMaxQ";
import RothMarriedJointlyIncomeQ from "./steps/RothMarriedJointlyIncomeQ";
import RothMarriedJointly50Q from "./steps/RothMarriedJointly50Q";
import PriRothReg from "./steps/PriRothReg";
import RothIntro from "./steps/RothIntro";
import PriRothMax from "./steps/PriRothMax";
import PriPostDebt from "./steps/PriPostDebt";
import SaveYourWork from "./steps/SaveYourWork";
import PriRothSingleTween from "./steps/PriRothSingleTween";
import RothSingle50Q from "./steps/RothSingle50Q";
import RothSingleMinQ from "./steps/RothSingleMinQ";
import RothSingleMaxQ from "./steps/RothSingleMaxQ";
import RothSingleOverD from "./steps/RothSingleOverD";
import RothSingleUnderD from "./steps/RothSingleUnderD";
import PriRothMarriedNotJointlyTween from "./steps/PriRothMarriedNotJointlyTween";
import RothMarriedNotJointlyMinQ from "./steps/RothMarriedNotJointlyMinQ";
import RothMarriedNotJointlyOverD from "./steps/RothMarriedNotJointlyOverD";
import PriBackdoorRothIntro from "./steps/PriBackdoorRothIntro";
import RothSingleQ from "./steps/RothSingleQ";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";
import Container from "react-bootstrap/Container";
import PriRothMarriedJointlyTween from "./steps/PriRothMarriedJointlyTween";
import RothMarriedJointlyOverD from "./steps/RothMarriedJointlyOverD";
import PriFour01kMax from "./steps/PriFour01kMax";
import PriTaxableBrokerageIntro from "./steps/PriTaxableBrokerageIntro";
import Row from "react-bootstrap/Row";
import NoDebt from "./steps/NoDebt";
// import BLANK from "./steps/BLANK";
import { updateCurrentRow } from "../actions/rowActions";

class StepContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepPath: [],
      rowPath: [],
      row1: "Intro",
      row2: "",
      row3: "",
    };
  }

  componentDidMount() {
    this.setState({ row1: this.props.currentStep });
  }

  // setRow = (row) => {
  //   this.props.updateCurrentRow(row);
  // };

  getNextRow = () => {
    switch (true) {
      case this.props.currentRow === "row1":
        return "row2";
      case this.props.currentRow === "row2":
        return "row3";
      case this.props.currentRow === "row3":
        return "row4";
      case this.props.currentRow === "row4":
        return "row5";
      case this.props.currentRow === "row5":
        return "row6";
      default:
        return null;
    }
  };

  clearRow = (row) => {
    switch (true) {
      case row === "row2":
        this.setState({
          row2: "",
        });
      case row === "row3":
        this.setState({
          row3: "",
        });
        case row === "row4":
        this.setState({
          row4: "",
        });
        case row === "row5":
        this.setState({
          row5: "",
        });
        case row === "row6":
        this.setState({
          row6: "",
        });
      default:
        return null;
    }
  };

  handleNextStep = (event) => {
    console.log("handleNextStep called");
    const nextStep = event.target.value;
    const nextRow = event.target.id;
    this.setState({
      stepPath: [...this.state.stepPath, nextStep],
    });
    this.setState({
      rowPath: [...this.state.rowPath, nextRow],
    });
    this.props.updateCurrentStep(nextStep);
    var stateObject = function () {
      var returnObj = {};
      returnObj[this.target.id] = this.target.value;
      return returnObj;
    }.bind(event)();
    this.setState({ [event.target.id]: event.target.value });
  };

  handlePrevStep = () => {
    const pathLength = this.state.stepPath.length;
    const pathLengthMinus2 = pathLength - 2;
    const prevRow = this.state.rowPath[pathLengthMinus2];
    const currentRowLocal = this.state.rowPath[pathLength - 1];
    // If current row isn't the same as the previous row, clear the current row
    if (prevRow !== currentRowLocal) {
      this.clearRow(currentRowLocal);
    }
    //remove the last element in the step array and the row array
    this.setState((prevState) => ({
      stepPath: prevState.stepPath.filter(
        (_, pathLength) => pathLength !== this.state.stepPath.length - 1
      ),
      rowPath: prevState.rowPath.filter(
        (_, pathLength) => pathLength !== this.state.rowPath.length - 1
      ),
    }));
    // Update the current step to be the previous step
    const updatedPathLength = this.state.stepPath.length;
    const myRow = this.state.rowPath[updatedPathLength - 2];
    const myStep = this.state.stepPath[updatedPathLength - 2];
    this.props.updateCurrentStep(myStep);
    this.props.updateCurrentRow(myRow);
    this.setState({ [myRow]: myStep });
  };

  loadChildInRow1 = () => {
    console.log(`loadChildinRow1 called`);
    switch (true) {
      case this.state.row1 === "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "SaveYourWork":
        return (
          <SaveYourWork
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row1 === "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow2 = () => {
    switch (true) {
      case this.state.row2 === "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "SaveYourWork":
        return (
          <SaveYourWork
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row2 === "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow3 = () => {
    switch (true) {
      case this.state.row3 === "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "SaveYourWork":
        return (
          <SaveYourWork
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row3 === "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow4 = () => {
    switch (true) {
      case this.state.row4 === "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "SaveYourWork":
        return (
          <SaveYourWork
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row4 === "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow5 = () => {
    switch (true) {
      case this.state.row5 === "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "SaveYourWork":
        return (
          <SaveYourWork
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      case this.state.row5 === "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            // setRow={this.setRow}
            getNextRow={this.getNextRow}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <Container className="stepContainer">
        <Row name="row1" id={this.props.currentRow} className="row1">
          {this.loadChildInRow1()}
        </Row>
        <Row name="row2" id={this.props.currentRow} className="row2">
          {this.loadChildInRow2()}
        </Row>
        <Row name="row3" id={this.props.currentRow} className="row3">
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
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
})(StepContainer);
