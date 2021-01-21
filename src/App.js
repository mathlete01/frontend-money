import React from "react";
import { Route, Switch, withRouter, NavLink } from "react-router-dom";
import Body from "./components/Body";
import NotFound from "./NotFound";
import Form from "./Auth/Form";
import { connect } from "react-redux";
import { updateCurrentStep } from "./actions/stepActions";
import { updateCurrentUser, setCurrentUser } from "./actions/userActions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSwimmingPool, faCoffee, faHandPointLeft, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

library.add(faSwimmingPool, faCoffee, faHandPointLeft, faChevronLeft);

class App extends React.Component {
  state = {
    user: "",
  };

  renderForm = (routerProps) => {
    console.log(routerProps);
    if (routerProps.location.pathname === "/login") {
      return <Form name="Login Form" handleSubmit={this.handleLogin} />;
    } else if (routerProps.location.pathname === "/signup") {
      return <Form name="Signup Form" handleSubmit={this.handleSignup} />;
    }
  };

  handleLogin = (info) => {
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
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <FontAwesomeIcon icon="swimming-pool" />
          {/* <img
              alt=""
              src="./images/noun_Ladder_3196564.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            /> */}{" "}
          The Ladder
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
            <Button variant="secondary" size="sm" href="/login">Log In</Button>
          </Nav.Item>
          <Nav.Item>
            <Button variant="secondary"  size="sm" onClick={this.handleLogout}>
              Log Out
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <Switch>
              <Route path="/" exact component={this.handleHome} />
              <Route path="/login" exact component={this.renderForm} />
              <Route path="/signup" exact component={this.renderForm} />
              <Route component={NotFound} />
            </Switch>
            <Body />
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
