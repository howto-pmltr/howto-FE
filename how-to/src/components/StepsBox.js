import React from "react";
import Step from "./Step"

import { Card, CardContent } from "@material-ui/core"

class StepsBox extends React.Component {

    editSteps = e => {
        e.preventDefault();
        this.props.toggleEditStep();
    }

    render() {
        return (
            <div>
                {this.props.userControls === true
                    ? <button onClick={this.editSteps}>Edit</button>
                    : null}
                <Card>
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
                                />
                            );
                        })
                        : null}
                </Card>
            </div>
        )
    }
}

export default StepsBox