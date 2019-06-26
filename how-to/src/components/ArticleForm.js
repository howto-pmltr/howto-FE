import React from "react";
import { addArticle, editArticle, toggleEditMode } from "../actions";
import { connect } from "react-redux";

class ArticleForm extends React.Component {
  state = {
    title: "",
    description: "",
    image_path: "",
    article_id: ""
  };

  componentDidMount() {
    if (this.props.postInfo) {
      return this.setState({
        title: this.props.postInfo.title,
        description: this.props.postInfo.description,
        image_path: this.props.postInfo.image_path,
        articleID: this.props.postInfo.id
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
      published_at: "true"
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
      published_at: "true"
    }
    this.props.editArticle(editedArticle)
    this.props.toggleEditMode()
    this.props.history.push(`/articles/${editedArticle.articleID}`)
    this.setState({
      title: "",
      description: "",
      image_path: "",
      article_id: ""
    })
  }

  render() {
    console.log(this.props.postInfo)
    return (
      <form onSubmit={this.props.postInfo ? this.changeArticle : this.postArticle}>
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
        <button>{this.props.postInfo ? "Submit Changes" : "Add Article"}</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
    error: ""
  };
};
export default connect(
  mapStateToProps,
  { addArticle, editArticle, toggleEditMode }
)(ArticleForm);
