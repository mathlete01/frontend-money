// import React from "react";
import React from "react";
import { connect } from "react-redux";
import { updateCurrentStep } from "../../actions/stepActions";
import { updateCurrentUser } from "../../actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Form, FormControl } from "react-bootstrap";
import { updateCurrentRow } from "../../actions/rowActions";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Hoc from "../../HOC";

class LeftoverMoney extends React.Component {
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
    // console.log(`_next: this.calcLeftoverMoney() = `, this.calcLeftoverMoney())
    this.props.handleNextStep(event);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUser !== this.props.currentUser) {
      this.setState({
        monthly_income: this.props.currentUser.monthly_income,
        monthly_bills: this.props.currentUser.monthly_bills,
        monthly_spending: this.props.currentUser.monthly_spending,
        leftover_money: this.props.currentUser.leftover_money,
      });
      // console.log(`componentDidUpdate: this.props.currentUser.leftover_money = `, this.props.currentUser.leftover_money)
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
    // console.log(`handleChange: this.props.currentUser.leftover_money = `, this.props.currentUser.leftover_money)
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
      this.props.currentUser.leftover_money = difference;
      let differenceWithCommas = this.props.numberWithCommas(difference);
      return differenceWithCommas;
    } else {
      return 0;
    }
  };

  checkValid = () => {
    if (this.calcLeftoverMoney() > 0) {
      return true;
    }
  };

  handleFocus = (event) => event.target.select();

  render() {
    return (
      <Container className="step">
        <Row id="header" className="rowElement">
          <Button
            onClick={this._prev}
            variant="link"
            className="backBtn"
            disabled
          >
            👈 BACK
          </Button>
          <hr className="w-100" />
        </Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>
              How much money do you have every month to put towards your goals?
              🥅
            </h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Container>
            Estimations are fine, you can always come back and update the
            numbers later.
            {/* If you're in a couple, enter your combined income, bills, and spending money. */}
          </Container>
        </Row>
        <Row id="form" className="rowElement">
          <Container>
            <Form.Group>
              <Form.Row>
                <Col id="formText">
                  <Form.Label>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={(props) =>
                        this.props.renderTooltip(
                          props,
                          "Your after-tax, take-home pay"
                        )
                      }
                    >
                      <a href="#" className="tooltiptext">
                        Monthly Income
                      </a>
                    </OverlayTrigger>
                  </Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="string"
                      min="0"
                      value={
                        this.state.monthly_income
                          ? this.state.monthly_income
                          : ""
                      }
                      id="monthly_income"
                      name="monthly_income"
                      //
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
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
                  <Form.Label>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={(props) =>
                        this.props.renderTooltip(
                          props,
                          "All your recurring expenses, including groceries, transportation costs, babysitters, etc."
                        )
                      }
                    >
                      <a href="#" className="tooltiptext">
                        Monthly Bills
                      </a>
                    </OverlayTrigger>
                  </Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="string"
                      min="0"
                      value={
                        this.state.monthly_bills ? this.state.monthly_bills : ""
                      }
                      id="monthly_bills"
                      name="monthly_bills"
                      //
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
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
                  <Form.Label>
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={(props) =>
                        this.props.renderTooltip(
                          props,
                          "How much you need for non-bill purchases, like dining out, movies, clothes, haircuts, etc."
                        )
                      }
                    >
                      <a href="#" className="tooltiptext">
                        Monthly Spending Money
                      </a>
                    </OverlayTrigger>
                  </Form.Label>
                </Col>
                <Col>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>$</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      className="formField"
                      type="string"
                      min="0"
                      value={
                        this.state.monthly_spending
                          ? this.state.monthly_spending
                          : ""
                      }
                      id="monthly_spending"
                      name="monthly_spending"
                      //
                      onChange={this.handleChange}
                      onFocus={this.handleFocus}
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
                      type="string"
                      min="0"
                      value={this.calcLeftoverMoney()}
                      readOnly
                      id="leftover_money"
                      name="leftover_money"
                      //
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
                      variant="continue"
                      block
                      id={this.props.currentRow}
                      value="Four01kQ"
                      onClick={this._next}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button variant="continue" block disabled>
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

// mapStateToProps is where we specify what slice of the state that we want to provide to our component through props. Here, we want to provide state.stepReducer.currentStep via a prop called currentStep and state. userReducer.currentUser via a prop called currentUser
const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
    currentRow: state.rowReducer.currentRow,
  };
};

// The connect function is linked to the store and listening to each change in the state that occurs. When a change occurs, it calls mapStateToProps(). We specify which component we are providing this data to at the very end.

// LeftoverMoney = Hoc(LeftoverMoney);

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
  updateCurrentRow,
})(LeftoverMoney);
