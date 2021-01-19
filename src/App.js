import React from "react";
import logo from "./logo.svg";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Body from "./components/Body";
// import MasterForm from "./components/MasterForm";

function App() {
  return (
    <div className="form-group">
      <Body />
    </div>
  );
}

export default App;
