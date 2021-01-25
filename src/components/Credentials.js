import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Credentials extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                placeholder="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Row>
        </Form>
    );
  }
}

export default Credentials;
