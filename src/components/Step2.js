import React, { Component } from "react";

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2>Does your job happen to offer a 401(k) plan?</h2>
        <button className="btn btn-secondary" type="button" onClick={this._yes}>
          Yes
        </button>
        <button className="btn btn-secondary" type="button" onClick={this._no}>
          No
        </button>
      </div>
    );
  }
}

export default Step2;
