import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { loginCurrentUser } from "../actions/userActions";
import { connect } from "react-redux";

class Credentials extends React.Component {
  state = {
    username: "",
    password: "",
    // password: "!iCPWC?L,2o?V!\2aR,e')'#}nDIlQUJ"
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.loginCurrentUser(this.state);
    this.props.handleSubmit(this.state);
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, { loginCurrentUser })(Credentials);


