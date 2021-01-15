import React, { Component } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Step3 from "./Step3";
import Step4 from "./Step4";
import CardBinary from "./CardBinary";
import GoalMoney from "./GoalMoney";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      monthly_income: 0,
      monthly_bills: 0,
      four01k_match: 0,
      //       cards:
      //   {
      //     id: 1,
      //     name: 'goal_money',
      //     data: {
      //       headline: 'How much money do you have to put towards your goals?',
      //       yes: null,
      //       no: null,
      //       number: 0,
      //       next: 'offer_401k'
      //     }
      //   },
      //   {
      //     id: 2,
      //     name: 'offer_401k',
      //     data: {
      //       headline: 'Does your employer offer a 401(k) plan?',
      //       yes: 'company_match',
      //       no: 'cc_debt',
      //       number: null,
      //       continue: null
      //     }
      //   },
      //   {
      //     id: 3,
      //     name: 'company_match',
      //     data: {
      //       headline: 'What percentage of your contributions does your company match?',
      //       yes: null,
      //       no: null,
      //       number: 0,
      //       continue: 'contribution_amt'
      //     }
      //   },
      //   {
      //     id: 4,
      //     name: 'cc_debt',
      //     data: {
      //       headline: 'Do you have credit card debt?',
      //       yes: 'how_much_debt',
      //       no: 'post_debt_determination',
      //       number: null,
      //       continue: null
      //     }
      //   }
    };
  }

  //   const API = "http://localhost:3000/cards";

  //   componentDidMount() {
  //     fetch(API)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         //? Did not need to make this an anonymous function
  //         this.setState({
  //           sushis: data,
  //         });
  //       })
  //       .then((data) => this.getFourSushis())
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password } = this.state;
    alert(`Your registration detail: \n 
             Email: ${email} \n 
             Username: ${username} \n
             Password: ${password}`);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  /*
   * the functions for our button
   */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <h1>MoneyBot 💵🤖</h1>
        <p>Step {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          {/* 
          render the form steps and pass required props in
        */}
          {/* <CardBinary currentStep={this.state.currentStep} /> */}
          <GoalMoney />
          {/* <StepOne
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          />
          <StepTwo
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
          /> */}

          {/* {this.previousButton()}
          {this.nextButton()} */}
        </form>
      </React.Fragment>
    );
  }
}

export default MasterForm;

// function StepOne(props) {
//   if (props.currentStep !== 1) {
//     return null;
//   }
//   return (
//     <div className="form-group">
//       <label htmlFor="email">Email address</label>
//       <input
//         className="form-control"
//         id="email"
//         name="email"
//         type="text"
//         placeholder="Enter email"
//         value={props.email}
//         onChange={props.handleChange}
//       />
//     </div>
//   );
// }

// function StepTwo(props) {
//   if (props.currentStep !== 2) {
//     return null;
//   }
//   return (
//     <div className="form-group">
//       <label htmlFor="username">Username</label>
//       <input
//         className="form-control"
//         id="username"
//         name="username"
//         type="text"
//         placeholder="Enter username"
//         value={props.username}
//         onChange={props.handleChange}
//       />
//     </div>
//   );
// }

// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   );
// }

// ReactDOM.render(<MasterForm />, document.getElementById("root"));

// export default MasterForm;
