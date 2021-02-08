import React from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Parent5 extends React.Component {
  state = {
    row1Child: "",
    row2Child: "",
  };

  setChild = (event) => {
    var stateObject = function () {
      var returnObj = {};
      returnObj[this.target.id] = this.target.value;
      return returnObj;
    }.bind(event)();

    this.setState({ [event.target.id]: event.target.value });
  };

  loadChildInRow1 = () => {
    switch (true) {
      case this.state.row1Child === "A":
        return <ChildA />;
        break;
      case this.state.row1Child === "B":
        return <ChildB />;
        break;
    }
  };

  loadChildInRow2 = () => {
    switch (true) {
      case this.state.row2Child === "A":
        return <ChildA />;
        break;
      case this.state.row2Child === "B":
        return <ChildB />;
        break;
    }
  };

  render() {
    return (
      <div>
        <Row >
          Row 1
          <Button
            onClick={(event) => this.setChild(event)}
            id="row1Child"
            value="A"
          >
            Load Child A in Row 1
          </Button>
          <Button
            onClick={(event) => this.setChild(event)}
            id="row1Child"
            value="B"
          >
            Load Child B in Row 1
          </Button>
          {this.loadChildInRow1()}
        </Row>
        <Row >
          Row 2
          <Button
            onClick={(event) => this.setChild(event)}
            id="row2Child"
            value="A"
          >
            Load Child A in Row 2
          </Button>
          <Button
            onClick={(event) => this.setChild(event)}
            id="row2Child"
            value="B"
          >
            Load Child B in Row 2
          </Button>
          {this.loadChildInRow2()}
        </Row>
      </div>
    );
  }
}

export default Parent5;
