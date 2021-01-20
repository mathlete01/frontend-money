import React from "react";
import "./App.css";
import Body from "./components/Body";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Form from "./components/Form";

function App() {
  // class App extends React.Component{
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
    this.setState({ user: "" }, () => {
      this.props.history.push("/login");
    });
  };

  handleSignup = (info) => {
    console.log("sign up");
    this.handleAuthFetch(info, "http://localhost:3000/users");
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
        this.setState({ user: data.user }, () => {
          localStorage.setItem("jwt", data.token);
          this.props.history.push("/");
        });
      });
  };

  // this is to handle a case where the user reloads the page but didn't mean to logout.  Re-fetches the user just using the token.
  // componentDidMount() {
  componentDidMount = () => {
    if (localStorage.getItem("jwt")) {
      fetch("http://localhost:3000/getuser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => this.setState({ user: data.user }));
    }
  };

  return (
    <div className="form-group">
      <Navbar handleLogout={this.handleLogout} />

      <Switch>
        <Route path="/" exact component={this.handleHome} />
        <Route path="/login" exact component={this.renderForm} />
        <Route path="/signup" exact component={this.renderForm} />
      </Switch>
      <Body />
    </div>
  );
}

export default App;
