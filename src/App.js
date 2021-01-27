import React from "react";
import { Route, Switch, withRouter, NavLink } from "react-router-dom";
// import Body from "./components/xBody";
import NotFound from "./NotFound";
import Credentials from "./components/Credentials";
import { connect } from "react-redux";
import { updateCurrentStep } from "./actions/stepActions";
import {
  updateCurrentUser,
  setCurrentUser,
  getCurrentUser,
} from "./actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSwimmingPool,
  faCoffee,
  faHandPointLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import StepContainer from "./components/StepContainer";
import "./App.css";
import Ladder from "./components/Ladder";

library.add(faSwimmingPool, faCoffee, faHandPointLeft, faChevronLeft);

class App extends React.Component {
  state = {
    user: "",
  };

  renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login") {
      return <Credentials name="Login Form" handleSubmit={this.handleLogin} />;
    } else if (routerProps.location.pathname === "/signup") {
      return (
        <Credentials name="Signup Form" handleSubmit={this.handleSignup} />
      );
    }
  };

  handleLogin = (credentialObj) => {
    // debugger
    console.log(`handleLogin: credentialObj = `, credentialObj);
    this.handleAuthFetch(credentialObj, "http://localhost:3000/login");
  };

  handleLogout = () => {
    // console.log("Logout called");
    localStorage.clear();
    this.props.setCurrentUser({});
    this.props.history.push("/");
    window.location.reload(false);
  };

  handleSignup = (credentialObj) => {
    // debugger
    console.log(`handleSignup: credentialObj = `, credentialObj);
    if (Object.keys(this.props.currentUser).length === 0) {
      this.handleAuthFetch(credentialObj, "http://localhost:3000/users");
    } else {
      this.props.updateCurrentUser(
        this.props.currentUser.id,
        {
          username: credentialObj.username,
          password: credentialObj.password,
        },
        this.props.currentStep
      );
    }
    this.props.history.push("/");
  };

  handleAuthFetch = (credentialObj, endpoint) => {
    console.log(`handleAuthFetch: credentialObj = `, credentialObj);
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: credentialObj.username,
          password: credentialObj.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("token", data.token);
          this.props.setCurrentUser(data.user);
          this.props.updateCurrentStep(data.user.current_step);
        } else {
          console.log(`data = `, data);
        }
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="white">
          <Switch>
            <Route path="/" exact component={this.handleHome} />
            <Route path="/login" exact component={this.renderForm} />
            <Route path="/signup" exact component={this.renderForm} />
            <Route component={NotFound} />
          </Switch>
          <Navbar.Brand>
            🪜 Climb the Ladder
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Row>
              <Col>
                <Nav.Item>
                  <NavLink variant="secondary" size="sm" to="/signup">
                    Sign Up
                  </NavLink>
                 
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                  <NavLink variant="secondary" size="sm" to="/login">
                    Log In
                  </NavLink>
                </Nav.Item>
              </Col>
              <Col>
                <Nav.Item>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={this.handleLogout}
                  >
                    Log Out
                  </Button>
                </Nav.Item>
              </Col>
            </Row>
          </Nav>
        </Navbar>
        <Container>
          <Row>
            {/* Left Margin */}
            <Col></Col>
            {/* Step Container */}
            <Col md={6} className="containerContainer">
              {/* <Switch>
                <Route path="/" exact component={this.handleHome} />
                <Route path="/login" exact component={this.renderForm} />
                <Route path="/signup" exact component={this.renderForm} />
                <Route component={NotFound} />
              </Switch> */}
              <StepContainer className="h-100" />
            </Col>
            {/* Ladder */}
            {/* <Col md={4} className="containerContainer">
              <Ladder />
            </Col> */}
            {/* Right Margin */}
            <Col></Col>
          </Row>
        </Container>
      </div>
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
  setCurrentUser,
  updateCurrentUser,
  getCurrentUser,
})(withRouter(App));
