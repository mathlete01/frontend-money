import React from "react";
import { Route, Switch, withRouter} from "react-router-dom";
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
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import StepContainer from "./components/StepContainer";
import "./App.css";
import { NavItem } from "react-bootstrap";
import background from "./img/wallpaper_sky_01.svg";
import logo from "./img/wordmark_d2i_white.svg"

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
    console.log(`handleLogin: credentialObj = `, credentialObj);
    this.handleAuthFetch(credentialObj, process.env.REACT_APP_BASE_URL+"/login");
  };

  handleLogout = () => {
    localStorage.clear();
    this.props.setCurrentUser({});
    this.props.history.push("/");
    window.location.reload(false);
  };

  handleSignup = (credentialObj) => {
    console.log(`handleSignup: credentialObj = `, credentialObj);
    if (Object.keys(this.props.currentUser).length === 0) {
      this.handleAuthFetch(credentialObj, process.env.REACT_APP_BASE_URL+"/users");
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
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize:'cover'
        }}
        id="bg"
      >
        <Navbar variant="light">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavItem href="/">
                <Button  to="/" onClick={this.handleLogout}  size="sm"
                  className={ this.props.currentStep === "Intro" ? "hidden" : "" }>Start Over
                </Button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Navbar>
          <Navbar.Collapse className="justify-content-end">
            <Row>
              <Switch>
                <Route path="/" exact component={this.handleHome} />
                <Route path="/login" exact component={this.renderForm} />
                <Route path="/signup" exact component={this.renderForm} />
                <Route component={NotFound} />
              </Switch>
            </Row>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col></Col>
            <Col md={8} className="mainContainer">
              <StepContainer className="h-100" />
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
    currentRow: state.rowReducer.currentRow,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  setCurrentUser,
  updateCurrentUser,
  getCurrentUser,
})(withRouter(App));
