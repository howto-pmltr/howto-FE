import React from "react";

//styles
import styled from "styled-components";

class Step extends React.Component {
  render() {
    return (
      <StepCard>
        <h2>{this.props.step.stepNumber}</h2>
        <StepImg
          src={`${this.props.step.img}`}
          alt={`${this.props.step.alt}`}
        />
        <p>{this.props.step.description}</p>
      </StepCard>
    );
  }
}

const StepImg = styled.img`
  width: 60%;
`;

const StepCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 40%;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 15rem;
  margin-top: 1rem;
`;

export default Step;
