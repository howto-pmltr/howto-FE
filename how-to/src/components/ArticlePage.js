import React from "react";
import { findSpecificArticle, deleteStep, fetchTags } from "../actions";
import { connect } from "react-redux";

//components
import ArticleHeader from "./ArticleHeader";
import Step from "./Step";
import StepForm from "./StepForm";
import Tags from "./Tags";
import TagForm from "./TagForm";

//styles
import styled from "styled-components";

class ArticlePage extends React.Component {
    componentDidMount() {
        const id = this.props.match.url.replace(/[^0-9]/g, "");
        this.props.findSpecificArticle(id);
    }

    render() {
        if (this.props.fetching) {
            return <div>loading...</div>;
        }
        return (
            <ArticleBox>
                <ArticleHeader history={this.props.history} article={this.props.articles} />
                <StepForm article={this.props.articles} />
                <TagForm article={this.props.articles} />
                <div>
                    {this.props.tags
                        ? this.props.tags.map(tag => {
                            return (
                                <Tags
                                    tag={tag}
                                    key={tag.id}
                                    article_id={this.props.articles.id}
                                />
                            );
                        })
                        : null}
                </div>
                <div>
                    {this.props.articles.steps
                        ? this.props.articles.steps.map(step => {
                            return (
                                <Step
                                    step={step}
                                    key={step.id}
                                    article_id={this.props.articles.id}
                                    deleteStep={this.props.deleteStep}
                                />
                            );
                        })
                        : null}
                </div>
            </ArticleBox>
        );
    }
}
/*<Tags article_id={this.props.articles.id} />*/
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
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { findSpecificArticle, deleteStep, fetchTags }
)(ArticlePage);
