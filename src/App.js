import React from "react";
import { Route, Switch, withRouter, NavLink } from "react-router-dom";
// import Body from "./components/xBody";
import NotFound from "./NotFound";
import Credentials from "./components/Credentials";
import { connect } from "react-redux";
import { updateCurrentStep } from "./actions/stepActions";
import { updateCurrentUser, setCurrentUser } from "./actions/userActions";
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
import Alert from "react-bootstrap/Alert";

library.add(faSwimmingPool, faCoffee, faHandPointLeft, faChevronLeft);

class App extends React.Component {
  state = {
    user: "",
  };

  renderForm = (routerProps) => {
    // debugger
    console.log(`routerProps = `, routerProps)
    if (routerProps.location.pathname === "/login") {
      return <Credentials name="Login Form" handleSubmit={this.handleLogin} />;
    } else if (routerProps.location.pathname === "/signup") {
      return (
        <Credentials name="Signup Form" handleSubmit={this.handleSignup} />
      );
    }
  };

  handleLogin = (info) => {
    // debugger
    console.log(`info = `, info);
    this.handleAuthFetch(info, "http://localhost:3000/login");
    window.location.reload(false);
  };

  handleLogout = () => {
    console.log("Logout called");
    localStorage.clear();
    this.props.setCurrentUser({});
    this.props.history.push("/");
    window.location.reload(false);
  };

  handleSignup = (info) => {
    // debugger
    if (Object.keys(this.props.currentUser).length === 0) {
      this.handleAuthFetch(info, "http://localhost:3000/users");
    } else {
      this.props.updateCurrentUser(this.props.currentUser.id, {
        username: info.username,
        password: info.password,
      });
    }
    this.props.history.push("/");
  };

  handleAuthFetch = (info, request) => {
    fetch(request, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.setCurrentUser(data);
      });
  };

  render() {
    return (
      <div>
        <Navbar bg="white">
          <Navbar.Brand>
            {/* <FontAwesomeIcon icon="swimming-pool" /> */}
            {/* <img
              alt=""
              src="./images/noun_Ladder_3196564.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}{" "}
            🪜 Climb the Ladder
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Item>
              {/* Nav.Link doesn't work */}
              {/* <Nav.Link to="/signup">Sign Up</Nav.Link>  */}
              <NavLink to="/signup">Sign Up</NavLink>
              {/* Button refreshes the page */}
              {/* <Button variant="secondary" size="sm" href="/signup">Sign Up</Button> */}
            </Nav.Item>
            <Nav.Item>
              {/* <NavLink to="/login">Log in</NavLink> */}
              <Button variant="secondary" size="sm" href="/login">
                Log In
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="secondary" size="sm" onClick={this.handleLogout}>
                Log Out
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6} className="containerContainer">
              <Switch>
                <Route path="/" exact component={this.handleHome} />
                <Route path="/login" exact component={this.renderForm} />
                <Route path="/signup" exact component={this.renderForm} />
                <Route component={NotFound} />
              </Switch>
              <StepContainer className="h-100"/>
            </Col>
            <Col xs={4} className="containerContainer">
              <Container className="border-right border-left border-gray">
                <Row>
                  <Alert variant="dark" id="rung_6">
                    <Alert.Heading>Rung 6</Alert.Heading>
                    <p className="mb-0">
                      Goal: Taxable brokerage account
                    </p>
                  </Alert>
                </Row>
                <Row>
                  <Alert variant="dark" id="rung_5">
                    <Alert.Heading>Rung 5</Alert.Heading>
                    <p className="mb-0">
                      Goal: 6-month Emergency Fund
                    </p>
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
                    <p className="mb-0">
                      Goal: Pay off credit card debt
                    </p>
                  </Alert>
                </Row>
                <Row>
                  <Alert variant="dark" id="rung_1">
                    <Alert.Heading>Rung 1</Alert.Heading>
                    <p className="mb-0">
                      Goal: Get 402(k) company match
                    </p>
                  </Alert>
                </Row>
              </Container>
            </Col>
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
})(withRouter(App));
