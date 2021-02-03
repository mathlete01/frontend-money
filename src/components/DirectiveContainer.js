import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { updateCurrentStep } from "../actions/stepActions";
import { updateCurrentUser } from "../actions/userActions";
import BackdoorRothIntro from "./directives/BackdoorRothIntro";
import Four01kMaxRec from "./directives/Four01kMaxRec";
import RothMarriedNotJointlyTweenD from "./directives/RothMarriedNotJointlyTweenD";
import RothMarriedJointlyTweenD from "./directives/RothMarriedJointlyTweenD";
import RothRegD from "./directives/RothRegD";
import RothMaxD from "./directives/RothMaxD";
import TaxableBrokerageIntro from "./directives/TaxableBrokerageIntro";
import Rung1Determination from "./directives/Rung1Determination";
import RothSingleTweenD from "./directives/RothSingleTweenD";

class DirectiveContainer extends React.Component {
  
  directive1 = () => {
    switch (true) {
      case this.props.directives[0] === "BackdoorRothIntro":
        return <BackdoorRothIntro />;
        break;
      case this.props.directives[0] === "Four01kMaxRec":
        return <Four01kMaxRec />;
        break;
      case this.props.directives[0] === "RothMarriedNotJointlyTweenD":
        return <RothMarriedNotJointlyTweenD />;
        break;
      case this.props.directives[0] === "RothMarriedJointlyTweenD":
        return <RothMarriedJointlyTweenD />;
        break;
      case this.props.directives[0] === "Four01kMaxRec":
        return <Four01kMaxRec />;
        break;
      case this.props.directives[0] === "RothRegD":
        return <RothRegD />;
        break;
      case this.props.directives[0] === "RothMaxD":
        return <RothMaxD />;
        break;
      case this.props.directives[0] === "TaxableBrokerageIntro":
        return <TaxableBrokerageIntro />;
        break;
      case this.props.directives[0] === "Rung1Determination":
        return <Rung1Determination />;
        break;
      case this.props.directives[0] === "RothSingleTweenD":
        return <RothSingleTweenD />;
        break;
    }
  };

  directive2 = () => {
    switch (true) {
      case this.props.directives[1] === "BackdoorRothIntro":
        return <BackdoorRothIntro />;
        break;
      case this.props.directives[1] === "Four01kMaxRec":
        return <Four01kMaxRec />;
        break;
      case this.props.directives[1] === "RothMarriedNotJointlyTweenD":
        return <RothMarriedNotJointlyTweenD />;
        break;
      case this.props.directives[1] === "RothMarriedJointlyTweenD":
        return <RothMarriedJointlyTweenD />;
        break;
      case this.props.directives[1] === "Four01kMaxRec":
        return <Four01kMaxRec />;
        break;
      case this.props.directives[1] === "RothRegD":
        return <RothRegD />;
        break;
      case this.props.directives[1] === "RothMaxD":
        return <RothMaxD />;
        break;
      case this.props.directives[1] === "TaxableBrokerageIntro":
        return <TaxableBrokerageIntro />;
        break;
      case this.props.directives[1] === "Rung1Determination":
        return <Rung1Determination />;
        break;
      case this.props.directives[1] === "RothSingleTweenD":
        return <RothSingleTweenD />;
        break;
    }
  };

  directive3 = () => {
    switch (true) {
      case this.props.directives[2] === "BackdoorRothIntro":
        return <BackdoorRothIntro />;
        break;
      case this.props.directives[2] === "Four01kMaxRec":
        return <Four01kMaxRec />;
        break;
      case this.props.directives[2] === "RothMarriedNotJointlyTweenD":
        return <RothMarriedNotJointlyTweenD />;
        break;
      case this.props.directives[2] === "RothMarriedJointlyTweenD":
        return <RothMarriedJointlyTweenD />;
        break;
      case this.props.directives[2] === "Four01kMaxRec":
        return <Four01kMaxRec />;
        break;
      case this.props.directives[2] === "RothRegD":
        return <RothRegD />;
        break;
      case this.props.directives[2] === "RothMaxD":
        return <RothMaxD />;
        break;
      case this.props.directives[2] === "TaxableBrokerageIntro":
        return <TaxableBrokerageIntro />;
        break;
      case this.props.directives[2] === "Rung1Determination":
        return <Rung1Determination />;
        break;
      case this.props.directives[2] === "RothSingleTweenD":
        return <RothSingleTweenD />;
        break;
    }
  };

  render() {
    return (
      <Container className="directiveContainer">
        <Row >
          {this.directive1()}
        </Row>
        <Row></Row>
        <Row >
          {this.directive2()}
        </Row>
        <Row></Row>
        <Row >
          {this.directive3()}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentStep: state.stepReducer.currentStep,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps, {
  updateCurrentStep,
  updateCurrentUser,
})(DirectiveContainer);
