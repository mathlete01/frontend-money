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
              <Card.Body>There are two schools of thought on debt payment: The Debt Snowball and the Debt Avalanche. Prioritizing debt with the highest interest rate is known as the Debt Avalanche, and it makes sense from a mathmatical standpoint. But we are big fans of all the learnings in the field of Behavioral Psycology, which show that the Debt Snowball approach is superior. Targeting the smallest debt first results in a psycological "win" that comes early. It is this success that motivates people to continue paying off their second largest debt next, and so on. Persistance is the name of the game, and the early successs of the Debt Snowball helps people stay on track.</Card.Body>
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
              <Card.Body>There is a longstanding debate of which approach is superior between the Traiditonal and Roth IRAs. We prefer the Roth for two main reasons: Because Roth contributions are made after taxes, your money grows tax-free and remains tax-free when you withdraw it, while your withdrawls from a Traditional IRA are taxed as income. The second, and possibly more important benefit is that you are allowed to withdraw your contributions (not your earnings on those contributions, just your contributions) any time for any reason with no penalty, quite unlike the Traditional IRA. This means that your Roth IRA can double as an Emergency Fund. It's extremely difficult for most people to amass an Emergency Fund and keep it in a savings account earning pennies. If you regularly contribute to your Roth IRA, you can amass a sizable amount that can be liquidated in an emergency without incuring a tax penalty.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                What about saving up an Emergency Fund, why isn't that included?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>Most of our users are people who are getting a late start on investing. Because investing is so time-dependant, we want to get people out of debt and into the stock market as soon as possible. The good news is that as long as you qualify for a Roth IRA, it can double as an emergency fund (see the previous question). Credit cards are a second option in you're in a pinch. We hate credit card debt as much as the next finance geek, but missing out on years of investment so you can amass six-month emergency fund is not worth it in our eyes. </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                What if I'm saving up for a wedding/house/college?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>Our goal at Debtor to Investor is to get the power of compounding interest working for you instead of against you. You know the airplane instructions that in the event of a pressure loss, you are supposed to put on your oxygen mask before putting one on your child? That's because you can't be a help to others until you yourself are safe. Similarly, we are trying to plot the fastest course to get you out of debt building investment savings. If you need money for a big ticket item like those listed above within 5 years, we recommend you seek out an independant, certified financial planner who is legally bound to act in your best interest (as opposed to someone who sells finacial products from the company they work for).</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Who are you and why should I take your advice?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>My name is Matty. Learn more about me and my motivations in the <a href="/about">About</a> section!</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Row className="signature"><p>Got other questions?{" "} <a href="mailto:msallin@gmail.com">Get in touch!</a></p></Row>
        {/* <Row className="signature">
          <p>More questions?{" "}
            <a href="mailto:msallin@gmail.com">Get in touch!</a></p>
        </Row> */}
        <Row className="mainContainer"></Row>
      </Container>
    );
  }
}

export default FAQ;
