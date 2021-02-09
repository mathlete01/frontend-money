import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";

class Parent1 extends React.Component {
  
  state = {
    boo: false,
  };

  toggleBoolean = () => {
    this.setState({
      boo: !this.state.boo,
    });
  };

  loadChildAInRow1 = () => {
    return <ChildA />;
  };

  render() {
    return (
      <div>
        <Row id={this.props.currentRow} name="row1">
          Row 1
          <Button onClick={this.toggleBoolean}>Load Child A in Row 1</Button>
          {/* Based on a change in state, loadChildAInRow1 will either be called or it won't */}
          {this.state.boo ? this.loadChildAInRow1() : null}
        </Row>
        <Row id={this.props.currentRow} name="row2">
          Row 2
        </Row>
      </div>
    );
  }
}

export default Parent1;
