import React from "react";
import { Route, Switch, withRouter, Link, NavLink } from "react-router-dom";
// import Body from "./components/xBody";
import Credentials from "./Credentials";
import { connect } from "react-redux";
import { updateCurrentStep } from "./../actions/stepActions";
import {
  updateCurrentUser,
  setCurrentUser,
  getCurrentUser,
} from "./../actions/userActions";
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

import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NotFound from "./../NotFound";
import { Form, FormControl, NavItem } from "react-bootstrap";

library.add(faSwimmingPool, faCoffee, faHandPointLeft, faChevronLeft);

class TopNav extends React.Component {
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
        <div>
          <Navbar>
            <Navbar.Brand>Make Money Moves</Navbar.Brand>
                <Switch>
                  <Route path="/" exact component={this.handleHome} />
                  <Route path="/login" exact component={this.renderForm} />
                  <Route path="/signup" exact component={this.renderForm} />
                  <Route component={NotFound} />
                </Switch>
            <Navbar.Collapse className="justify-content-end">
            <Nav>
                <NavItem href="/">
                  <Nav.Link as={Link} to="/login">
                    Log in
                  </Nav.Link>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem href="/">
                  <Nav.Link as={Link} to="/signup">
                    Sign up
                  </Nav.Link>
                </NavItem>
              </Nav>
              <Nav>
                <NavItem href="/">
                  <Nav.Link as={Link} to="/" onClick={this.handleLogout}>
                    Log out
                  </Nav.Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
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
})(withRouter(TopNav));
