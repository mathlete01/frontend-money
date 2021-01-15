import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import MasterForm from "./MasterForm";

const Body = () => {

    return (
        <Container>
            <div>
                {/* <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>Blurb</p>
                </Jumbotron> */}
            </div>
            <div>
                <MasterForm />
            </div>
        </Container>
    )

}

export default Body;