import React from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";
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
import Nav from "react-bootstrap/Nav";
import StepContainer from "./components/StepContainer";
import "./App.css";
import { NavItem } from "react-bootstrap";
import background from "./img/wallpaper_sky_01.svg";
import logo from "./img/wordmark_d2i_white.svg";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Toast from "react-bootstrap/Toast";
import About from "./components/About";
import HireMe from "./components/HireMe";
import FAQ from "./components/FAQ";
import { BrowserView, MobileView } from "react-device-detect";
// import Hoc from "./HOC";

class App extends React.Component {
  state = {
    user: "",
    showToast: true,
  };

  renderForm = (routerProps) => {
    switch (routerProps.location.pathname) {
      case "/login":
        return (
          <Credentials name="Login Form" handleSubmit={this.handleLogin} />
        );
      case "/signup":
        return (
          <Credentials name="Signup Form" handleSubmit={this.handleSignup} />
        );
      case "/":
        return <StepContainer className="h-100" />;
      case "/about":
        return <About className="h-100" />;
      case "/hireme":
        return <HireMe className="h-100" />;
      case "/faq":
        return <FAQ className="h-100" />;
      default:
        break;
    }
  };

  handleLogin = (credentialObj) => {
    // console.log(`handleLogin: credentialObj = `, credentialObj);
    this.handleAuthFetch(
      credentialObj,
      // eslint-disable-next-line no-undef
      process.env.REACT_APP_BASE_URL + "/login"
    );
  };

  handleLogout = () => {
    localStorage.clear();
    // eslint-disable-next-line react/prop-types
    this.props.setCurrentUser({});
    // eslint-disable-next-line react/prop-types
    this.props.history.push("/");
    window.location.reload(false);
  };

  handleSignup = (credentialObj) => {
    // console.log(`handleSignup: credentialObj = `, credentialObj);
    // eslint-disable-next-line react/prop-types
    if (Object.keys(this.props.currentUser).length === 0) {
      this.handleAuthFetch(
        credentialObj,
        process.env.REACT_APP_BASE_URL + "/users"
      );
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
    // console.log(`handleAuthFetch: credentialObj = `, credentialObj);
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
          // console.log(`data = `, data);
        }
      });
  };

  renderTooltip = (props, tooltipTxt) => {
    return <Tooltip {...props}>{tooltipTxt}</Tooltip>;
  };

  hideToast = () => {
    this.setState({
      showToast: false,
    });
    //console.log(`this.state.showToast = `, this.state.showToast);
  };

  showToast = () => {
    if (
      this.props.currentStep === "LeftoverMoney" &&
      this.state.showToast === true
    ) {
      return (
        <Toast
          style={{
            position: "absolute",
            top: 0,
            right: 15,
            zIndex: "1",
          }}
          onClose={this.hideToast}
        >
          <Toast.Header>
            <strong className="mr-auto">💡 Tip</strong>
          </Toast.Header>
          <Toast.Body className="toastText">
            <i>
              <BrowserView>
                Roll over{" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    this.renderTooltip(props, "Yeah, just like that!")
                  }
                >
                  <a href="#" className="tooltiptext">
                    highlighted
                  </a>
                </OverlayTrigger>{" "}
                text to see a definition
              </BrowserView>
              <MobileView>
                Click{" "}
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 250, hide: 400 }}
                  overlay={(props) =>
                    this.renderTooltip(props, "Yeah, just like that!")
                  }
                >
                  <a href="#" className="tooltiptext">
                    highlighted
                  </a>
                </OverlayTrigger>{" "}
                text to see a definition
              </MobileView>
            </i>
          </Toast.Body>
        </Toast>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
        id="bg"
      >
        <Nav>
          <NavItem href="/">
            <Nav.Link as={Link} to="/">
              <img
                className="logo"
                src={logo}
                width="90"
                height="90"
                alt="Debtor to Investor"
              />
            </Nav.Link>
          </NavItem>
        </Nav>
        <Nav className="topnav" defaultActiveKey="/home">
          <NavItem href="/">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </NavItem>
          <NavItem href="/">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </NavItem>
          <NavItem href="/">
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
          </NavItem>
          <NavItem href="/">
            <Nav.Link as={Link} to="/hireme">
              Hire Me!
            </Nav.Link>
          </NavItem>
          <Switch>
            <Route path="/" exact component={this.handleHome} />
            <Route path="/login" exact component={this.renderForm} />
            <Route path="/signup" exact component={this.renderForm} />
          </Switch>
          {this.showToast()}
        </Nav>
        <Container className="header">
          <Row>
            <Col></Col>
            <Col md={8} className="header">
              <Switch>
                <Route path="/about" exact component={this.renderForm} />
                <Route path="/" exact component={this.renderForm} />
                <Route path="/hireme" exact component={this.renderForm} />
                <Route path="/faq" exact component={this.renderForm} />
              </Switch>
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
