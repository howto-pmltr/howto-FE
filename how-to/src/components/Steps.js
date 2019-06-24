import React from "react";

//components
import Step from "./Step";

//styles
import styled from "styled-components";

class Steps extends React.Component {
  render() {
    return (
      <StepBox>
        {this.props.steps.map(step => (
          <Step step={step} />
        ))}
      </StepBox>
    );
  }
}

const StepBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
`;

export default Steps;
