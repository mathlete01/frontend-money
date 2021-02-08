import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ReactDOM from "react-dom";

class Parent3 extends React.Component {
  state = {
    nextChild: "",
  };

  setChild = (event, childName) => {
    console.log(`childName = `, childName);
    this.setState({
      nextChild: childName,
    });
  };

  loadChildInRow1 = () => {
    switch (true) {
      case this.state.nextChild === "A":
        return <ChildA />;
        break;
      case this.state.nextChild === "B":
        return <ChildB />;
        break;
    }
  };
  
  loadChildInRow2 = () => {
    switch (true) {
      case this.state.nextChild === "A":
        return <ChildA />;
        break;
      case this.state.nextChild === "B":
        return <ChildB />;
        break;
    }
  };

  render() {
    return (
      <div>
        <Row id="row1" name="row1">
          Row 1
          <Button onClick={(event) => this.setChild(event, "A")}>
            Load Child A in Row 1
          </Button>
          <Button onClick={(event) => this.setChild(event, "B")}>
            Load Child B in Row 1
          </Button>
          {this.loadChildInRow1()}
        </Row>
        <Row id="row2" name="row2">
          Row 2
          <Button onClick={(event) => this.setChild(event, "A")}>
            Load Child A in Row 2
          </Button>
          <Button onClick={(event) => this.setChild(event, "B")}>
            Load Child B in Row 2
          </Button>
          {this.loadChildInRow2()}
        </Row>
      </div>
    );
  }
}

export default Parent3;
