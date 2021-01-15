import React, { Component } from "react";

class GoalMoney extends React.Component {
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

  render() {
    // if (this.props.currentStep !== 1) {
    //   // Prop: The current step
    //   return null;
    // }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>How much money do you have every month to put towards your goals?</h2>
        {/* <label htmlFor="monthly_income">Monthly Income</label> */}
        <label>Monthly Income</label>
        <input
          className="form-control"
          id="monthly_income"
          name="monthly_income"
          type="number"
          placeholder="3000"
          value={this.props.monthly_income} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <label htmlFor="monthly_bills">Monthly Bills</label>
        <input
          className="form-control"
          id="monthly_bills"
          name="monthly_bills"
          type="number"
          placeholder="1000"
          value={this.props.monthly_bills} // Prop: The email input data
          onChange={this.props.handleChange} // Prop: Puts data into state
        />
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      </div>
    );
  }
}

export default GoalMoney;
