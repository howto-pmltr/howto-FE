import React from "react";
import Step from "./Step"

class StepsBox extends React.Component {

    editSteps = e => {
        e.preventDefault();
        this.props.toggleEditStep();
    }

    render() {
        return (
            <div>
                <button onClick={this.editSteps}>Edit</button>
                {this.props.articles.steps
                    ? this.props.articles.steps.map(step => {
                        return (
                            <Step
                                step={step}
                                key={step.id}
                                article_id={this.props.articles.id}
                                deleteStep={this.props.deleteStep}
                                editingStep={this.props.editingStep}
                            />
                        );
                    })
                    : null}
            </div>
        )
    }
}

export default StepsBox