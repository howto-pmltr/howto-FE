import React from "react";
import { addStep, toggleEditStep, editStep } from "../actions";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components"

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
            <StyledForm onSubmit={this.props.editingStep === false ? this.postStep : this.changeStep}>
                <TextField
                    placeholder="Title"
                    onChange={this.handleChanges}
                    value={this.state.title}
                    name="title"
                />
                <TextField
                    placeholder="Content"
                    onChange={this.handleChanges}
                    value={this.state.content}
                    name="content"
                />
                <TextField
                    placeholder="Image URL"
                    onChange={this.handleChanges}
                    value={this.state.image_path}
                    name="image_path"
                />
                <StepButton type="submit" variant="contained" >{this.props.editingStep === false ? "Add Step" : "Save Changes"}</StepButton>
            </StyledForm>
        );
    }
}

const StyledForm = styled.form`
display: flex;
flex-direction: column
width: 55%
border: 2px solid black
padding: 1rem
background: white;
margin: auto;
margin-top: 0
@media (max-width: 500px) {
    margin-top: 2rem
  }`

const StepButton = styled(Button)({
    background: "#621295 !important",
    color: "white !important"
});

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
