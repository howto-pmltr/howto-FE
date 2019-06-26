import React from "react";
import { addStep, editStep, toggleEditStep } from "../actions";
import { connect } from "react-redux";

class StepForm extends React.Component {
    state = {
        title: "",
        content: "",
        image_path: "",
        step_number: "",
        articleID: "",
        stepID: ""
    };

    componentDidMount() {
        if (this.props.stepInfo) {
            return this.setState({
                title: this.props.stepInfo.title,
                content: this.props.stepInfo.content,
                image_path: this.props.stepInfo.image_path,
                articleID: this.props.stepInfo.article_id,
                stepID: this.props.stepInfo.id,
                step_number: this.props.stepInfo.step_number
            })
        }
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    postStep = e => {
        e.preventDefault();
        const newStep = {
            title: this.state.title,
            content: this.state.content,
            image_path: this.state.image_path,
            userID: localStorage.getItem("userID"),
            step_number: this.props.articles.steps.length + 1,
            article_id: this.props.articles.id
        };
        console.log(newStep);
        this.props.addStep(newStep);
        this.setState({
            title: "",
            content: "",
            image_path: ""
        });
    };

    changeStep = e => {
        e.preventDefault();
        const editedStep = {
            title: this.state.title,
            content: this.state.content,
            image_path: this.state.image_path,
            articleID: this.state.articleID,
            stepID: this.state.stepID,
            userID: localStorage.getItem("userID"),
            step_number: this.state.step_number
        }
        console.log(editedStep)
        this.props.editStep(editedStep)
        this.props.toggleEditStep()
        this.setState({
            title: "",
            content: "",
            image_path: "",
            step_number: "",
            articleID: "",
            stepID: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.props.editingStep === false ? this.postStep : this.changeStep}>
                <input
                    autoFocus={true}
                    placeholder="Title"
                    onChange={this.handleChanges}
                    value={this.state.title}
                    name="title"
                />
                <input
                    placeholder="Content"
                    onChange={this.handleChanges}
                    value={this.state.content}
                    name="content"
                />
                <input
                    placeholder="Image URL"
                    onChange={this.handleChanges}
                    value={this.state.image_path}
                    name="image_path"
                />
                <button>{this.props.editingStep === false ? "Add Step" : "Save Changes"}</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
        error: "",
        editingStep: state.editingStep
    };
};
export default connect(
    mapStateToProps,
    { addStep, editStep, toggleEditStep }
)(StepForm);
