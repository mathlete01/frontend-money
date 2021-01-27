import React from "react";
import { connect } from "react-redux";
import {
  updateCurrentUser,
  setCurrentUser,
  getCurrentUser,
} from ".././actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

class Ladder extends React.Component {

  render() {
    return (
      <Container className="border-right border-left border-gray">
        <Row>
          <Alert variant="dark" id="rung_6">
            <Alert.Heading>Rung 6</Alert.Heading>
            <p className="mb-0">Goal: Taxable brokerage account</p>
          </Alert>
        </Row>
        <Row>
          <Alert variant="dark" id="rung_5">
            <Alert.Heading>Rung 5</Alert.Heading>
            <p className="mb-0">Goal: 6-month Emergency Fund</p>
          </Alert>
        </Row>
        <Row>
          <Alert variant="dark" id="rung_4">
            <Alert.Heading>Rung 4</Alert.Heading>
            <p className="mb-0">Goal: Max-out your 401(k)</p>
          </Alert>
        </Row>
        <Row>
          <Alert variant="dark" id="rung_3">
            <Alert.Heading>Rung 3</Alert.Heading>
            <p className="mb-0">Goal: Max-out a Roth IRA</p>
          </Alert>
        </Row>
        <Row>
          <Alert variant="warning" id="rung_2">
            <Alert.Heading>Rung 2</Alert.Heading>
            <p className="mb-0">Goal: Pay off credit card debt</p>
          </Alert>
        </Row>
        <Row>
          <Alert variant="dark" id="rung_1">
            <Alert.Heading>Rung 1</Alert.Heading>
            <p className="mb-0">Goal: Get 402(k) company match</p>
          </Alert>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {
  setCurrentUser,
  updateCurrentUser,
  getCurrentUser,
})(Ladder);
