import React, { Component } from "react";
import Container from "react-bootstrap/Container";
// import Jumbotron from 'react-bootstrap/Jumbotron'
import MasterForm from "./MasterForm";
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
        <MasterForm />
      </Row>
    </Container>
  );
};

export default Body;
