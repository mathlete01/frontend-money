// import React from "react";
import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormControl } from "react-bootstrap";

class LeftoverMoney extends React.Component {
  
  componentDidUpdate(prevProps, prevState) {
    // console.log("LeftoverMoney: ComponentDidUpdate");
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        monthly_income: this.props.currentUser.monthly_income,
        monthly_bills: this.props.currentUser.monthly_bills,
        monthly_spending: this.props.currentUser.monthly_spending,
        leftover_money: this.props.currentUser.leftover_money,
      });
    }
  }

  state = {
    monthly_income: this.props.currentUser.monthly_income,
    monthly_bills: this.props.currentUser.monthly_bills,
    monthly_spending: this.props.currentUser.monthly_spending,
    leftover_money: this.props.currentUser.leftover_money,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  calcLeftoverMoney = () => {
    if (
      this.state.monthly_income &&
      this.state.monthly_bills &&
      this.state.monthly_spending
    ) {
      const income = this.state.monthly_income;
      const bills = this.state.monthly_bills;
      const spending = this.state.monthly_spending;
      const difference = income - (parseInt(bills) + parseInt(spending));
      this.props.currentUser.leftover_money = difference
      return difference;
    }else{
      return (0)
    } 
  };

  _next = (event) => {
    event.preventDefault();
    this.props.updateCurrentUser(
      this.props.currentUser.id,
      {
        monthly_income: this.state.monthly_income,
        monthly_bills: this.state.monthly_bills,
        monthly_spending: this.state.monthly_spending,
        leftover_money: this.calcLeftoverMoney(),
      },
      this.props.currentStep
    );
    // this.props.handleNextStep("Four01kQ");
    this.props.setChild(event);
  };

  checkValid = () => {
    if (this.calcLeftoverMoney() > 0) {
      return true;
    }
  };

  render() {
    // if (this.props.currentStep !== "LeftoverMoney") {
    //   return null;
    // }
    // console.log("LeftoverMoney is in tha house")
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button onClick={this._prev} variant="link" disabled>
            <FontAwesomeIcon icon="chevron-left" /> Back
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>
              How much money do you have every month to put towards your goals?
            </h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Estimations are fine, you can always come back and update the
            numbers later.
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Monthly Income</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={
                        this.state.monthly_income
                          ? this.state.monthly_income
                          : 0
                      }
                      id="monthly_income"
                      name="monthly_income"
                      size="lg"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Monthly Bills</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={
                        this.state.monthly_bills ? this.state.monthly_bills : 0
                      }
                      id="monthly_bills"
                      name="monthly_bills"
                      size="lg"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Monthly Spending Money</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={
                        this.state.monthly_spending
                          ? this.state.monthly_spending
                          : 0
                      }
                      id="monthly_spending"
                      name="monthly_spending"
                      size="lg"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>Leftover Money</Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="number"
                      min="0"
                      value={this.calcLeftoverMoney()}
                      readOnly
                      id="leftover_money"
                      name="leftover_money"
                      size="lg"
                    />
                  </InputGroup>
                </Col>
              </Form.Row>
            </Form.Group>
          </Container>
        </Row>
        <Row id="buttons" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col></Col>
                <Col>
                  {this.checkValid() ? (
                    <Button
                      className="yes"
                      variant="primary"
                      size="lg"
                      block
                      id="row1"
                    value="Four01kQ"
                      onClick={this._next}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      className="yes"
                      variant="primary"
                      size="lg"
                      block
                      disabled
                    >
                      Next
                    </Button>
                  )}
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
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(LeftoverMoney);
