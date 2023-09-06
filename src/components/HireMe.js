import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import selfie from "../img/Mattmoji-3x.png";

class HireMe extends React.Component {
  render() {
    return (
      <Container className="page">
        <Row id="header" className="rowElement"></Row>
        <Row id="title" className="rowElement">
          <Container>
            <h3>This Gun's for Hire</h3>
          </Container>
        </Row>
        <Row id="body" className="rowElement">
          <Col md={7}>
            <p>
              After focusing on User Experience for years, I recently decided to get back into
              programming. In Spring 2021 I completed a <a href="https://flatironschool.com/career-courses/coding-bootcamp/online" target="_blank" rel="noreferrer">Software Engineering course at Flatiron School</a>
 {" "}and this is my capstone project. I've deployed it in hopes that it would help people climb the ladder out of debt and into financial security.
            </p>
            <p>
              I've learned a tremendous amount about front-end engineering, backend engineering, and the mechanics of web
              applications. I'm looking forward to applying new programming skills and my old UX skills to a new job opportunity.
            </p>
            <p>
              Wanna know more?{" "}
              <a href="mailto:msallin@gmail.com">Get in touch!</a>
            </p>
            -Matty
          </Col>
          <Col md={5}>
            <Figure>
              <Figure.Image width={100} height={100} src={selfie} />
              {/* <Figure.Caption>Matty</Figure.Caption> */}
            </Figure>
            <p>Matty Sallin</p>
            <p>
              <a href="mailto:matty@mathlete.com">matty@mathlete.com</a>
            </p>
            <p>
              <a
                href="http://www.linkedin.com/in/msallin"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{" "}•{" "}
              <a
                href="http://www.mathlete.com"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
            </p>
          </Col>
        </Row>
        <Row id="mainContainer" className="rowElement"></Row>
      </Container>
    );
  }
}

export default HireMe;
