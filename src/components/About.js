import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import selfie from "../img/Mattmoji-3x.png";

class About extends React.Component {
  render() {
    return (
      <Container className="page">
        <Row id="header" className="rowElement"></Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>About</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Col md={7}>
            <p>
              Compounding interest can have a massively positive or negative
              impact on your life depending on how well you manage your money.
              But the subject of Personal Finance is dull, complex, and
              intimidating, so most people never properly manage their debt or
              take advatage of investment.
            </p>
            <p>
              I used to be one of those people myself, until I made a New Year's
              Resolution to get my financial act together. I ended up completely
              geeking out on the subject, and realized that it's all just a set
              of widely agreed-upon best practices. There's a logic and a
              sequence to it.
            </p>
            <p>
              This realization inspired me to create a system to help everyone
              who doesn't <i>want</i> to geek out on Personal Finance--for all
              the smart, hardworking people who just want their debt to shrink,
              their savings to grow, and to be able to retire in comfort.
            </p>
            <p>
              I've taken the best practices of Personal Finance that I learned
              from Suze Orman, Ramit Sethi, and Dave Ramsay and baked them into
              this app. Just answer a series of nosy questions and Debtors to
              Investors will give you a set of prioritized to-do items.
            </p>
            <p>
              Got questions that are frequenly asked? Check out the{" "}
              <a href="www.DebtorToInvestor.com/faq">FAQ</a>.
            </p>
            <p>
              Got other questions?{" "}
              <a href="mailto:msallin@gmail.com">Email me!</a> I'm happy to
              help.
            </p>
            -Matty
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <Figure>
              <Figure.Image width={100} height={100} src={selfie} />
              {/* <Figure.Caption>Matty</Figure.Caption> */}
            </Figure>
            <p>Matty Sallin</p>
            <p><a href="mailto:matty@mathlete.com">matty@mathlete.com</a></p>
            <p><a href="http://www.linkedin.com/in/msallin" target="_blank" rel="noreferrer">LinkedIn</a>
             • <a href="http://www.mathlete.com" target="_blank" rel="noreferrer">Portfolio</a></p>
          </Col>
        </Row>
        <Row id="mainContainer" className="rowElement"></Row>
      </Container>
    );
  }
}

export default About;
