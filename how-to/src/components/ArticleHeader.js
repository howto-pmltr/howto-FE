import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteArticle, toggleEditMode } from "../actions";
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
    this.props.toggleEditMode();
  }

  render() {

    return (
      this.props.editing === true ? <ArticleForm history={this.props.history} postInfo={this.props.article} /> :
        <Link to={`/articles/${this.props.article.id}`} className="linkEdit">
          <TitleBox>
            <h1>{this.props.article.title}</h1>
            <h3>{this.props.article.description}</h3>
            <h2>{this.props.article.author_username}</h2>
            {this.props.article.image_path ? (
              <TitleImg
                src={`${this.props.article.image_path}`}
                alt={`${this.props.article.title}`}
              />
            ) : null}
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
    editing: state.editing
  };
};

export default connect(
  mapStateToProps,
  { deleteArticle, toggleEditMode }
)(ArticleHeader);

/*<TitleImg src={`${this.props.image}`} alt={`${this.props.alt}`} />*/
