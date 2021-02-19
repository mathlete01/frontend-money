import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const renderTooltip = (props, tooltipTxt) => {
    return (
      <Tooltip {...props}>
        {tooltipTxt}
      </Tooltip>
    );
  };

  
class TestTooltip extends React.Component {
  render() {
    return (
      <div>
        What if I want a tooltip that says "hello"
        <OverlayTrigger
          placement="bottom"
          overlay={(props) => renderTooltip(props, "Hiya")}
        ><a href="#"> here </a></OverlayTrigger> 
        and "goodbye" <OverlayTrigger placement="bottom" overlay={(props) => renderTooltip(props, "Laterz")}><a href="#"> here </a></OverlayTrigger>?
      </div>
    );
  }
}

export default TestTooltip;

