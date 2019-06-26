import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteArticle, toggleEditArticle, editArticle } from "../actions";
import ArticleForm from "./ArticleForm"

//styles
import styled from "styled-components";

class ArticleHeader extends React.Component {

  removePost = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteArticle(this.props.article.id);
  };

  editPost = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleEditArticle();
  }

  publishPost = e => {
    e.preventDefault();
    e.stopPropagation();
    const articleToPublish = {
      title: this.props.article.id,
      image_path: this.props.article.image_path,
      author_username: this.props.article.author_username,
      description: this.props.article.description,
      published_at: "true",
      userID: localStorage.getItem("userID"),
      articleID: this.props.article.id
    }
    this.props.editArticle(articleToPublish)
  }

  render() {

    return (
      this.props.editingArticle === true ? <ArticleForm postInfo={this.props.article} /> :
        <Link to={`/articles/${this.props.article.id}`} className="linkEdit">
          <TitleBox>
            {this.props.article.published_at === null ? <button onClick={this.publishPost}>Publish!</button> : null}
            <h1>{this.props.article.title}</h1>
            <h3>{this.props.article.description}</h3>
            <h2>{this.props.article.author_username}</h2>
            <TitleImg
              src={`${this.props.article.image_path}`}
              alt={`${this.props.article.title}`}
            />
            <button onClick={this.editPost}>Edit</button>
            <button onClick={this.removePost}>X</button>
          </TitleBox>
        </Link>
    );
  }
}

const TitleImg = styled.img`
  width: 75%;
`;

const TitleBox = styled.div`
  border: 1px solid black;
  margin-top: 1rem;
`;

const mapStateToProps = state => {
  return {
    error: state.error,
    editingArticle: state.editingArticle
  };
};

export default connect(
  mapStateToProps,
  { deleteArticle, toggleEditArticle, editArticle }
)(ArticleHeader);

/*<TitleImg src={`${this.props.image}`} alt={`${this.props.alt}`} />*/
