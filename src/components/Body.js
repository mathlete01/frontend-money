import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import MasterForm from "./MasterForm";

const Body = () => {
  return (
    <Container>
      {/* <div className="form-group">
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>Blurb</p>
                </Jumbotron>
            </div> */}
      <div className="form-group">
        <MasterForm />
      </div>
    </Container>
  );
};

export default Body;
