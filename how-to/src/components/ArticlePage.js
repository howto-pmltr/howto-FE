import React from "react";
import { findSpecificArticle, deleteStep, fetchTags, toggleEditArticle, toggleEditStep, fetchByTag, likeArticle } from "../actions";
import { connect } from "react-redux";

//components
import ArticleHeader from "./ArticleHeader";
import StepsBox from "./StepsBox"
import StepForm from "./StepForm";
import ArticleTags from "./ArticleTags";
import TagForm from "./TagForm";

//styles
import styled from "styled-components";
import { Card, CircularProgress } from "@material-ui/core";

class ArticlePage extends React.Component {


    componentDidMount() {
        const id = this.props.match.url.replace(/[^0-9]/g, "");
        this.props.findSpecificArticle(id);
    }



    editSteps = e => {
        e.preventDefault();
        this.props.toggleEditStep();
    }

    tagSearch = tag => {
        this.props.fetchByTag(tag)
        this.props.history.push("/searchresults");
    }

    render() {
        //checks to see if the user currently logged in is the author of the post.
        const userControls = localStorage.getItem("username") === this.props.articles.author_username;

        if (this.props.fetching) {
            return <Loader color="secondary" />;
        }

        return (
            <ArticleBox>
                <ArticleHeader history={this.props.history} article={this.props.articles} userControls={userControls} />
                <FormsBox>
                    <div className="tag-holder">
                        {userControls
                            ? <TagForm />
                            : null}
                        <TagCard>
                            {this.props.articles.tags
                                ? this.props.articles.tags.map(tag => {
                                    return (

                                        <ArticleTags
                                            tag={tag}
                                            key={tag.id}
                                            articleID={this.props.articles.id}
                                            tagSearch={this.tagSearch} />

                                    )
                                })
                                : "No Tags Yet!"}
                        </TagCard>
                    </div>
                    {this.props.editingStep === false && userControls
                        ? <StepForm />
                        : null}

                </FormsBox>
                <StepsBox
                    userControls={userControls}
                    editingStep={this.props.editingStep}
                    articles={this.props.articles}
                    toggleEditStep={this.props.toggleEditStep}
                    deleteStep={this.props.deleteStep}
                />

            </ArticleBox>
        );
    }
}

//styled components
const ArticleBox = styled.div`
                  width: 75%;
                  margin: auto;
                  padding-top: 5rem;
                  padding-bottom: 2rem;
                  @media (max-width: 500px) {
                    width: 95%;
                  }
                `;

const FormsBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
flex-flow: wrap;
margin-top: 5rem;
margin-bottom: 5rem;
@media (max-width: 500px) {
    justify-content: center;
  }`

const Loader = styled(CircularProgress)({
    paddingTop: "10rem"
});


const TagCard = styled(Card)({
    margin: "auto"
});

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
    { findSpecificArticle, deleteStep, fetchTags, toggleEditArticle, toggleEditStep, fetchByTag, likeArticle }
)(ArticlePage);
