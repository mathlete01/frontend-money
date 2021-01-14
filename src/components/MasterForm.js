import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // this._next = this._next.bind(this)
    // this._prev = this._prev.bind(this)

    this.state = {
      currentStep: 1,
      monthly_income: 3000,
      monthly_bills: 1000,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { monthly_income, monthly_bills } = this
      .statealert(`Your registration detail: \n 
    Monthly_Income: ${monthly_income} \n
    Monthly_Bills: ${monthly_bills}`);
  };
  render() {
    return (
      <React.Fragment>
        {/* <h1>A Wizard Form!</h1> */}
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* Render the form steps and pass in the required props */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            monthly_income={this.state.monthly_income}
            monthly_bills={this.state.monthly_bills}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            four01k={this.state.four01k}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            companyMatch={this.state.companyMatch}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            cc1_amount={this.state.cc1_amount}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default MasterForm;
