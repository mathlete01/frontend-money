import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class FAQ extends React.Component {
  render() {
    return (
      <Container className="page">
        <Row id="header" className="rowElement"></Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>Frequently Asked Questions</h3>
          </Container>
        </Row>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Why do you prioritize paying off the smallest debt instead of
                the debt with the highest interest rate?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Why trust you?</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Why do you focus on the Roth IRA and not even mention
                Traditional IRAs?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>Traditional IRA</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                What about saving up an Emergency Fund, why isn't that included?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>EFund</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                What if I'm saving up for a wedding/house/college?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Wedding</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Who are you and why should I take your advice?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Why trust you?</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="5">
                Are you making money off this? Are you collecting my data?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>Data collecting</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Row className="rowElement"></Row>
        <Row className="signature">
          <p>More questions?{" "}
            <a href="mailto:msallin@gmail.com">Get in touch!</a></p>
        </Row>
        <Row className="mainContainer"></Row>
      </Container>
    );
  }
}

export default FAQ;
