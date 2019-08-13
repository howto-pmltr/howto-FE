import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteArticle, toggleEditArticle, editArticle, likeArticle } from "../actions";
import ArticleForm from "./ArticleForm"
import EditingTools from "./EditingTools"

//styles
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import { Card, CardHeader, CardMedia, CardActions, CardContent, Typography, IconButton, Tooltip } from '@material-ui/core/';

class ArticleHeader extends React.Component {

  removePost = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteArticle(this.props.article.id);
    this.props.history.push("/home")
  };

  editPost = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.toggleEditArticle();
  }

  togglePublishPost = e => {
    e.preventDefault();
    e.stopPropagation();
    const articleToToggle = {
      title: this.props.article.title,
      image_path: this.props.article.image_path,
      author_username: this.props.article.author_username,
      description: this.props.article.description,
      published_at: "true",
      userID: localStorage.getItem("userID"),
      articleID: this.props.article.id
    }
    console.log(articleToToggle)
    this.props.editArticle(articleToToggle)
    this.props.history.push(`/articles/${this.props.article.id}`);
  }

  Like = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.likeArticle(this.props.article.id)
  }

  render() {

    return (
      <Fade left cascade>
        <ArticleCard>
          {this.props.editingArticle === true
            ? <ArticleForm postInfo={this.props.article} />
            : <Link to={`/articles/${this.props.article.id}`} className="linkEdit">
              <CardHeader
                title={this.props.article.title}
                subheader={`Author: ${this.props.article.author_username}`} />
              <CardMedia
                className="card"
                image={`${this.props.article.image_path}`}
                title={`${this.props.article.title}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{this.props.article.description}</Typography>
              </CardContent>
              <CardActions className="actions-box">
                {this.props.history.location.pathname === `/articles/${this.props.article.id}`
                  ? <div className="thumb">
                    <Tooltip title="Like">
                      <IconButton onClick={this.Like}>
                        <i className="fas fa-thumbs-up" />
                      </IconButton>
                    </Tooltip>
                    <p>{this.props.article.likes_count} {this.props.article.likes_count === null ? null : (this.props.article.likes_count > 1 ? 'Likes' : 'Like')}</p>
                  </div>
                  : null}

                {//userControls is a variable that checks if the currently logged in user matches the author of an article. 
                  //If the user is the author of the article, they will see this section which includes edit, delete and publish buttons. Publish will only appear if the article is currently unpublished. 
                  this.props.userControls
                    ? <EditingTools
                      editPost={this.editPost}
                      removePost={this.removePost}
                      togglePublishPost={this.togglePublishPost}
                      published={this.props.article.published_at} />
                    : null}
              </CardActions>


            </Link>}
        </ArticleCard>
      </Fade>
    );
  }
}

const ArticleCard = styled(Card)({
  margin: "2rem",
  marginBottom: "0",
  height: "76%"
});

const mapStateToProps = state => {
  return {
    error: state.error,
    editingArticle: state.editingArticle
  };
};

export default connect(
  mapStateToProps,
  { deleteArticle, toggleEditArticle, editArticle, likeArticle }
)(ArticleHeader);

/*<TitleImg src={`${this.props.image}`} alt={`${this.props.alt}`} />*/

/*            <button onClick={this.toggleLike}>{this.state.liked === true ? <i className="fas fa-thumbs-up"></i> : <i className="far fa-thumbs-up"></i>}</button>*/