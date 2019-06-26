import React from "react";
import StepForm from "./StepForm"

//styles
import styled from "styled-components";

class Step extends React.Component {
  removeStep = e => {
    e.preventDefault();
    this.props.deleteStep(this.props.article_id, this.props.step.id);
  };

  render() {
    return (
      this.props.editingStep === true ? <StepForm stepInfo={this.props.step} /> :
        <StepCard>
          <h2>{this.props.step.step_number}</h2>
          <StepImg
            src={`${this.props.step.img_path}`}
            alt={`${this.props.step.title}`}
          />
          <p>{this.props.step.content}</p>
          <button onClick={this.removeStep}>X</button>
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
