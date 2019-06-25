import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../actions";

//components
import ArticleHeader from "./ArticleHeader";
import Steps from "./Steps";

//styles
import styled from "styled-components";

class ArticleContainer extends React.Component {
  componentDidMount() {
    this.props.fetchArticle();
  }

  render() {
    console.log(this.props.articles);
    if (this.props.fetching === true) {
      return <div>loading...</div>;
    }
    return (
      <ArticleBox>
        {this.props.articles.map(article => (
          <ArticleHeader article={article} key={article.id} />
        ))}
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
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchArticle }
)(ArticleContainer);
