import React from "react";
import { connect } from "react-redux";
import { fetchArticle } from "../actions";

//components
import ArticleHeader from "./ArticleHeader";

//styles
import styled from "styled-components";
import CircularProgress from '@material-ui/core/CircularProgress';

class ArticleContainer extends React.Component {
  componentDidMount() {
    const userID = this.props.match.url.replace(/[^0-9]/g, "");
    if (this.props.match.url === "/searchresults") {
      return this.props.articles
    }
    console.log(userID);
    this.props.fetchArticle(userID);
    if (!this.props.articles) {
      this.props.fetchArticle(userID)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.key !== this.props.location.key) {
      const userID = this.props.match.url.replace(/[^0-9]/g, "");
      if (this.props.match.url === "/searchresults") {
        return this.props.articles
      }
      console.log(userID);
      if (!userID) {
        this.props.fetchArticle();
      } else this.props.fetchArticle(userID);
      if (!this.props.articles) {
        this.props.fetchArticle(userID)
      }
    }
  }


  render() {
    const currentArticles = Array.from(this.props.articles).sort((a, b) => b.id - a.id)

    if (this.props.fetching) {
      return <Loader color="secondary" />;
    }
    return (
      <ArticleBox>
        {currentArticles.map(article => (
          <ArticleHeader history={this.props.history} article={article} key={article.id} />
        ))}
      </ArticleBox>
    );
  }
}

//styled components
const ArticleBox = styled.div`
  width: 75%;
  margin: auto;
  padding-bottom: 3rem; 
  padding-top: 5rem;
  @media (max-width: 500px) {
    width: 95%;
  }
`;

const Loader = styled(CircularProgress)({
  paddingTop: "10rem"
});

//redux
const mapStateToProps = state => {
  return {
    articles: state.articles,
    fetching: state.fetching,
    error: state.error,
    adding: state.adding
  };
};

export default connect(
  mapStateToProps,
  { fetchArticle }
)(ArticleContainer);
