import React from "react";
import { Route, Switch, withRouter, Link } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import NotFound from "./NotFound";
import Form from "./Auth/Form";
import { connect } from "react-redux";
import { updateCurrentStep } from "./actions/stepActions";
import { updateCurrentUser, setCurrentUser } from "./actions/userActions";

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

  //auth
  handleLogin = (info) => {
    console.log("login");
    this.handleAuthFetch(info, "http://localhost:3000/login");
  };

  // logout needs to delete the token from localStorage AND remove user data from state
  handleLogout = () => {
    localStorage.clear();
    this.props.setCurrentUser({})
    this.props.history.push("/")
  };

  handleSignup = (info) => {
    console.log("sign up");
    if(Object.keys(this.props.currentUser).length == 0){
      this.handleAuthFetch(info, "http://localhost:3000/users");
    }else{
      this.props.updateCurrentUser(this.props.currentUser.id, { username: info.username, password: info.password })
    }
    this.props.history.push("/")
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
        // stores the user in state, but stores the token in localStorage
        this.props.setCurrentUser(data);
      });
  };

  render() {
    return (
      <div className="form-group">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
        <button
          className="btn btn-secondary float-right"
          type="button"
          onClick={this.handleLogout}
        >
          Log Out
        </button>
        <Switch>
          <Route path="/" exact component={this.handleHome} />
          <Route path="/login" exact component={this.renderForm} />
          <Route path="/signup" exact component={this.renderForm} />
          <Route component={NotFound} />
        </Switch>
        <Body />
      </div>
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  // console.log(`state = `, state)
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps, { updateCurrentStep, setCurrentUser, updateCurrentUser })(withRouter(App));
// export default withRouter(App);
