import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";

class Parent2 extends React.Component {
  state = {
    nextChild: "<ChildA />",
  };

  setChild = (event, childName) => {
    console.log(`childName = `, childName);
    this.setState({
      nextChild: childName,
    });
  };

  loadChildInRow1 = () => {
    return this.state.nextChild;
  };

  loadChildInRow2 = () => {
    switch (true) {
      case this.state.nextChild === "<ChildA />":
        return <ChildA />;
        break;
      case this.state.nextChild === "<ChildB />":
        return <ChildB />;
        break;
    }
  };

  render() {
    return (
      <div>
        <Row id={this.props.currentRow} name="row1">
          Row 1
          <Button onClick={(event) => this.setChild(event, "<ChildB />")}>
            Load Child B in Row 1
          </Button>
          {this.loadChildInRow1}
        </Row>
        <Row id={this.props.currentRow} name="row2">
          Row 2
          <Button onClick={(event) => this.setChild(event, "<ChildB />")}>
            Load Child B in Row 2
          </Button>
          {this.loadChildInRow2}
        </Row>
      </div>
    );
  }
}

export default Parent2;
