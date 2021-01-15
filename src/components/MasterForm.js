import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: "Step1",
      email: "",
      username: "",
      password: "",
    };
  }

  handleChange = (step) => {
    this.setState({
      currentStep: step,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Advise-o-matic 💵</h1>
        {/* <form onSubmit={this.handleSubmit}> */}
          {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <Step4
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
        {/* </form> */}
      </React.Fragment>
    );
  }
}

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { email, username, password } = this.state;
//     alert(`Your registration detail: \n 
//              Email: ${email} \n 
//              Username: ${username} \n
//              Password: ${password}`);
//   };

export default MasterForm;