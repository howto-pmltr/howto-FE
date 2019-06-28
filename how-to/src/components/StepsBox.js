import React from "react";
import Step from "./Step"

import { Card, Button } from "@material-ui/core"
import styled from "styled-components"

class StepsBox extends React.Component {

    state = {
        steps: ""
    }

    componentDidMount() {
        this.setState({
            steps: this.props.articles.steps
        })
    }

    editSteps = e => {
        e.preventDefault();
        this.props.toggleEditStep();
    }

    render() {
        return (
            <div>
                <StepCard>
                    {this.props.articles.steps
                        ? this.props.articles.steps.map((step, index) => {
                            return (
                                <Step
                                    step={step}
                                    stepNumber={index + 1}
                                    key={step.id}
                                    article={this.props.articles}
                                    article_id={this.props.articles.id}
                                    deleteStep={this.props.deleteStep}
                                    editingStep={this.props.editingStep}
                                    userControls={this.props.userControls}
                                />
                            );
                        })
                        : null}
                </StepCard>
                {this.props.userControls === true
                    ? <Button type="submit" variant="contained" color="secondary" onClick={this.editSteps}>Edit Steps!</Button>
                    : null}
            </div>
        )
    }
}


const StepCard = styled(Card)({
    marginBottom: "2rem"
});

export default StepsBox