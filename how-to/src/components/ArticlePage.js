import React from "react";
import { findSpecificArticle, deleteStep, fetchTags, toggleEditArticle, toggleEditStep } from "../actions";
import { connect } from "react-redux";

//components
import ArticleHeader from "./ArticleHeader";
import StepsBox from "./StepsBox"
import StepForm from "./StepForm";
import ArticleTags from "./ArticleTags";
import TagForm from "./TagForm";

//styles
import styled from "styled-components";

class ArticlePage extends React.Component {
    componentDidMount() {
        const id = this.props.match.url.replace(/[^0-9]/g, "");
        this.props.findSpecificArticle(id);
    }

    editSteps = e => {
        e.preventDefault();
        this.props.toggleEditStep();
    }

    render() {
        //checks to see if the user currently logged in is the author of the post.
        const userControls = localStorage.getItem("username") === this.props.articles.author_username;

        if (this.props.fetching) {
            console.log(this.props.articles.tags)
            return <div>loading...</div>;
        }

        return (
            <ArticleBox>
                <ArticleHeader article={this.props.articles} userControls={userControls} />
                {this.props.editingStep === false && userControls ? <StepForm article={this.props.articles} /> : null}
                {userControls ? <TagForm article={this.props.articles} /> : null}
                {this.props.articles.tags ? this.props.articles.tags.map(tag => {
                    return (
                        <ArticleTags
                            tag={tag}
                            key={tag.id}
                            articleID={this.props.articles.id}
                        />
                    );
                }) : null}
                <div>
                    <StepsBox editingStep={this.props.editingStep} articles={this.props.articles} toggleEditStep={this.props.toggleEditStep} deleteStep={this.props.deleteStep} />
                </div>
            </ArticleBox>
        );
    }
}

//styled components
const ArticleBox = styled.div`
                  width: 75%;
                  margin: auto;
                `;

//redux
const mapStateToProps = state => {
    return {
        articles: state.articles,
        fetching: state.fetching,
        error: state.error,
        editingStep: state.editingStep
    };
};

export default connect(
    mapStateToProps,
    { findSpecificArticle, deleteStep, fetchTags, toggleEditArticle, toggleEditStep }
)(ArticlePage);
