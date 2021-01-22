import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import StepContainer from "./StepContainer";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Body = () => {
  return (
    <Container>
      {/* <div>
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>Blurb</p>
                </Jumbotron>
            </div> */}
      <Row>
        <StepContainer />
      </Row>
    </Container>
  );
};

export default Body;
