import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../actions";

//components
import ArticleHeader from "./ArticleHeader";

//styles
import styled from "styled-components";

class ArticleContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.url.replace(/[^0-9]/g, "");
    console.log(id);
    if (!id) {
      this.props.fetchArticle();
    } else this.props.fetchArticle(id);
  }

  render() {
    const currentArticles = Array.from(this.props.articles);

    if (this.props.fetching) {
      return <div>loading...</div>;
    }
    console.log(this.props.articles);
    return (
      <ArticleBox>
        {currentArticles.map(article => (
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
