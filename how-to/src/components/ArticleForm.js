import React from "react";
import { addArticle, editArticle, toggleEditArticle } from "../actions";
import { connect } from "react-redux";

//styles
import styled from "styled-components"

class ArticleForm extends React.Component {
  state = {
    title: "",
    description: "",
    image_path: "",
    article_id: "",
    published_at: null
  };

  componentDidMount() {
    if (this.props.postInfo) {
      return this.setState({
        title: this.props.postInfo.title,
        description: this.props.postInfo.description,
        image_path: this.props.postInfo.image_path,
        articleID: this.props.postInfo.id,
        published_at: this.props.postInfo.published_at === true ? true : null
      })
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postArticle = e => {
    e.preventDefault();
    const newArticle = {
      title: this.state.title,
      description: this.state.description,
      image_path: this.state.image_path,
      author_username: localStorage.getItem("username"),
      userID: localStorage.getItem("userID"),
      published_at: this.state.published_at
    };
    console.log(newArticle);
    this.props.addArticle(newArticle);
    this.setState({
      title: "",
      description: "",
      image_path: ""
    });
    this.props.history.push(`/${localStorage.getItem("userID")}`);
  };

  changeArticle = e => {
    e.preventDefault()
    const editedArticle = {
      title: this.state.title,
      description: this.state.description,
      image_path: this.state.image_path,
      author_username: localStorage.getItem("username"),
      userID: localStorage.getItem("userID"),
      articleID: this.state.articleID,
      published_at: this.state.published_at
    }
    this.props.editArticle(editedArticle)
    this.props.toggleEditArticle()
    this.setState({
      title: "",
      description: "",
      image_path: "",
      article_id: ""
    })
  }

  render() {
    console.log(this.props)
    return (
      <StyledForm onSubmit={this.props.editingArticle === false ? this.postArticle : this.changeArticle}>
        <input
          autoFocus={true}
          placeholder="Title"
          onChange={this.handleChanges}
          value={this.state.title}
          name="title"
        />
        <input
          placeholder="Description"
          onChange={this.handleChanges}
          value={this.state.description}
          name="description"
        />
        <input
          placeholder="Image URL"
          onChange={this.handleChanges}
          value={this.state.image_path}
          name="image_path"
        />
        <button>{this.props.editingArticle === false ? "Add Article" : "Submit Changes"}</button>
      </StyledForm>
    );
  }
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    `

const mapStateToProps = state => {
  return {
    articles: state.articles,
    error: state.error,
    editingArticle: state.editingArticle
  };
};
export default connect(
  mapStateToProps,
  { addArticle, editArticle, toggleEditArticle }
)(ArticleForm);
