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
import PriRothMarriedJointlyTween from "./steps/PriRothMarriedJointlyTween";
import RothMarriedJointlyOverD from "./steps/RothMarriedJointlyOverD";
import PriFour01kMax from "./steps/PriFour01kMax";
import PriTaxableBrokerageIntro from "./steps/PriTaxableBrokerageIntro";
import NoDebt from "./steps/NoDebt";
import PaySchedule from "./steps/PaySchedule";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";
import { updateCurrentClick } from "../actions/clickActions";
import { updateCurrentRow } from "../actions/rowActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";

class StepContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stepPath: [],
      rowPath: [],
      row1: "Intro",
      row2: "",
      row3: "",
      row4: "",
      row5: "",
    };
  }

  renderTooltip = (props, tooltipTxt) => {
    return <Tooltip {...props}>{tooltipTxt}</Tooltip>;
  };

  componentDidMount() {
    this.setState({ row1: this.props.currentStep });
  }

  // New and improved way to use Switch statement below!
  getNextRow = () => {
    let nextRow = null;
    switch (this.props.currentRow) {
      case "row1":
        nextRow = "row2";
        break;
      case "row2":
        nextRow = "row3";
        break;
      case "row3":
        nextRow = "row4";
        break;
      case "row4":
        nextRow = "row5";
        break;
      case "row5":
        nextRow = "row6";
        break;
      default:
        break;
    }
    return nextRow;
  };

  clearRow = (row) => {
    console.log("clearRow called");
    switch (true) {
      case row === "row2":
        this.setState({
          row2: "",
        });
        break;
      case row === "row3":
        this.setState({
          row3: "",
        });
        break;
      case row === "row4":
        this.setState({
          row4: "",
        });
        break;
      case row === "row5":
        this.setState({
          row5: "",
        });
        break;
      case row === "row6":
        this.setState({
          row6: "",
        });
        break;
      default:
        return null;
    }
  };

  handleNextStep = (event) => {
    let nextStep = event.target.value;
    let nextRow = event.target.id;
    // If current row isn't the same as the next, update the current row
    if (this.props.currentRow !== nextRow) {
      this.props.updateCurrentRow(nextRow);
    }
    // add a new element to the step array and the row array
    this.setState({
      stepPath: [...this.state.stepPath, nextStep],
    });
    this.setState({
      rowPath: [...this.state.rowPath, nextRow],
    });
    // Update the current step to be the next step
    this.props.updateCurrentStep(nextStep);
    this.props.updateCurrentRow(nextRow);
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
    switch (this.state.row1) {
      case "PaySchedule":
        return (
          <PaySchedule
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );

      case "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="1"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow2 = () => {
    switch (this.state.row2) {
      case "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );

      case "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="2"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow3 = () => {
    switch (this.state.row3) {
      case "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );

      case "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="3"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow4 = () => {
    switch (this.state.row4) {
      case "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );

      case "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="4"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      default:
        return null;
    }
  };

  loadChildInRow5 = () => {
    switch (this.state.row5) {
      case "PriBackdoorRothIntro":
        return (
          <PriBackdoorRothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebt":
        return (
          <CreditCardDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "CreditCardDebtQ":
        return (
          <CreditCardDebtQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "DoneForNow":
        return (
          <DoneForNow
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kContribution":
        return (
          <Four01kContribution
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMatch":
        return (
          <Four01kMatch
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kMaxOutQ":
        return (
          <Four01kMaxOutQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriFour01kMax":
        return (
          <PriFour01kMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Four01kQ":
        return (
          <Four01kQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "Intro":
        return (
          <Intro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "LeftoverMoney":
        return (
          <LeftoverMoney
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "NoDebt":
        return (
          <NoDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothIntro":
        return (
          <RothIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointly50Q":
        return (
          <RothMarriedJointly50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyIncomeQ":
        return (
          <RothMarriedJointlyIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMaxQ":
        return (
          <RothMarriedJointlyMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyMinQ":
        return (
          <RothMarriedJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyOverD":
        return (
          <RothMarriedJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedJointlyQ":
        return (
          <RothMarriedJointlyQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedJointlyTween":
        return (
          <PriRothMarriedJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyMinQ":
        return (
          <RothMarriedNotJointlyMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothMarriedNotJointlyOverD":
        return (
          <RothMarriedNotJointlyOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMarriedNotJointlyTween":
        return (
          <PriRothMarriedNotJointlyTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothMax":
        return (
          <PriRothMax
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothReg":
        return (
          <PriRothReg
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingle50Q":
        return (
          <RothSingle50Q
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleIncomeQ":
        return (
          <RothSingleIncomeQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMaxQ":
        return (
          <RothSingleMaxQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleMinQ":
        return (
          <RothSingleMinQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleOverD":
        return (
          <RothSingleOverD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleQ":
        return (
          <RothSingleQ
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriRothSingleTween":
        return (
          <PriRothSingleTween
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "RothSingleUnderD":
        return (
          <RothSingleUnderD
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      case "PriPostDebt":
        return (
          <PriPostDebt
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );

      case "PriTaxableBrokerageIntro":
        return (
          <PriTaxableBrokerageIntro
            handlePrevStep={this.handlePrevStep}
            handleNextStep={this.handleNextStep}
            rowNum="5"
            getNextRow={this.getNextRow}
            renderTooltip={this.renderTooltip}
          />
        );
      default:
        return null;
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
    currentRow: state.rowReducer.currentRow,
    currentClick: state.clickReducer.currentClick,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
  updateCurrentClick,
})(StepContainer);
