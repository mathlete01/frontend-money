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
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/navigation";

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      prevStep: "",
      path: [],
      credit_card_debt: 0,
    };
  }

  monthsToPayOffDebt = () => {
    console.log("monthsToPayOffDebt")
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;
    let SPECIFIC_USER = `${USERS_URL}/${this.state.currentUser}`
    console.log(`SPECIFIC_USER = ${SPECIFIC_USER}`)

    let formData = {
      id: this.props.currentUser,
    };

    let configOb = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    let userObj = ""
    // fetch(`${USERS_URL}/2`, configOb)
    fetch(`${SPECIFIC_USER}`, configOb)
      .then((res) => res.json())
      // .then((obj) => console.log(obj.credit_card_debt))
      .then(data => userObj = data)
      .then(() => console.log(userObj))
      .then(() => console.log(userObj.credit_card_debt))
      .then(() => console.log(userObj.leftover_money))
      // .then(return{(userObj => {
        //  userObj.credit_card_debt})};
      // .catch((errors) => console.log(`saveIncomeBills: ${errors}`));
      // console.log(obj)
      // let debt = userObj.credit_card_debt
      // let leftover_money = userObj.leftover_money
      return userObj.credit_card_debt
      // return "WORLD"
  };

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
    let last = this.state.path.length - 2;
    // console.log(`last = ${last}`);
    this.props.updateCurrentStep(this.state.path[last]);
  };

  setCurrentUser = (obj) => {
    this.setState({
      currentUser: obj.id,
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
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
        />
        <Four01k
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
        />
        <Four01kMatch
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
        />
        <Four01kContribution
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebtQuestion
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
        />
        <CreditCardDebt
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
        />
        <Rung1Determination
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
          monthsToPayOffDebt={this.monthsToPayOffDebt}
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
