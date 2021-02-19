import React from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const BASE_URL = "http://localhost:3000";
const USERS_URL = `${BASE_URL}/users`;

const renderTooltip = props => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);

class Intro extends React.Component {

  _next = (event) => {
    event.preventDefault();
    this.props.handleNextStep(event);
    if (Object.keys(this.props.currentUser).length === 0) {
      this.createUser();
    }
  };

  generateRandomString = function (length = 6) {
    return Math.random().toString(20).substr(2, length);
  };

  createUser = () => {
    let formData = {
      user: {
        username: this.generateRandomString(),
        password: this.generateRandomString(),
        current_step: "LeftoverMoney",
      },
    };
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(USERS_URL, configObj)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        this.props.setCurrentUser(data.user);
        localStorage.setItem("token", data.token);
      })
      .catch((errors) => console.log(`createUser: ${errors}`));
  };

  render() {
    return (
      <Container className="step">
        <Row id="header" className="rowElement"></Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>
              Interest should be <i>earned</i>, not paid
            </h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Wondering how to get started with <OverlayTrigger
                    placement="top"
                    content="hello?"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  ><a href="#">investing</a></OverlayTrigger>? This interactive quiz
            asks you a series of questions, then <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  ><a href="#" class="dotted">delivers</a></OverlayTrigger> a personalized plan to
            transform you from a debtor to an <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  ><a href="#"><mark>investor</mark></a></OverlayTrigger>.
          </Container>
        </Row>
        <Row id="form" className="rowElement"></Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col></Col>
                <Col>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button
                      id={this.props.currentRow}
                      value="LeftoverMoney"
                      className="yes"
                      variant="primary"
                      size="lg"
                      block
                      onClick={this._next}
                    >
                      Let's go 👉
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, { setCurrentUser, updateCurrentRow })(
  Intro
);
