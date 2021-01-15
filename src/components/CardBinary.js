import React, { Component } from "react";

class CardBinary extends React.Component {
  render() {
    return (
      <div className="form-group">
        <h2>{this.props.currentStep.headline}</h2>
        <button className="btn btn-secondary form-control" type="button" onClick={this._yes}>
          Yes
        </button>
        <button className="btn btn-secondary form-control" type="button" onClick={this._no}>
          No
        </button>
      </div>
    );
  }
}

export default CardBinary;
