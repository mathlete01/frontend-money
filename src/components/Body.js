import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'

const Body = () => {

    return (
        <Container>
            <div>
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>Blurb</p>
                </Jumbotron>
            </div>
        </Container>
    )

}

export default Body;