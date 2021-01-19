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
import { updateCurrentStep } from "../actions/navigation";

// const BASE_URL = "http://localhost:3000";
// const USERS_URL = `${BASE_URL}/users`;

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      prevStep: "",
      path: [],
      credit_card_debt: 0,
      userObject: {},
    };
  }

  getUserObject = () => {
    const BASE_URL = "http://localhost:3000";
    const USERS_URL = `${BASE_URL}/users`;
    const SPECIFIC_USER = `${USERS_URL}/${this.state.currentUser}`;
    const formData = {
      id: this.props.currentUser,
    };

    const configOb = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(`${SPECIFIC_USER}`, configOb)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ userObject: data });

      })
  };

  handleNextStep = (nextStep) => {
    this.setState({
      path: [...this.state.path, nextStep],
    });
    this.props.updateCurrentStep(nextStep);
  };

  handlePrevStep = () => {
    console.log("handlePrevStep called");
    const i = this.state.path.length;
    this.setState((prevState) => ({
      path: prevState.path.filter((_, i) => i !== this.state.path.length - 1),
    }));
    const last = this.state.path.length - 2;
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
          userObject={this.state.userObject}
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
          getUserObject={this.getUserObject}
        />
        <CreditCardDebt
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
          getUserObject={this.getUserObject}
        />
        <Rung1Determination
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
          getUserObject={this.getUserObject}
          userObject={this.state.userObject}
        />
        <DoneForNow
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
          getUserObject={this.getUserObject}
        />
        <RothIRA
          currentStep={this.props.currentStep}
          handlePrevStep={this.handlePrevStep}
          currentUser={this.state.currentUser}
          handleNextStep={this.handleNextStep}
          getUserObject={this.getUserObject}
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
