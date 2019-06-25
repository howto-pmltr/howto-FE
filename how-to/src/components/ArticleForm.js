import React from "react";
import { addArticle } from "../actions";
import { connect } from "react-redux";

class ArticleForm extends React.Component {
  state = {
    title: "",
    description: "",
    image_path: ""
  };

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
      author_username: localStorage.getItem("username")
    };
    console.log(newArticle);
    this.props.addArticle(newArticle);
    this.setState({
      title: "",
      description: "",
      image_path: ""
    });
    this.props.history.push(`/${localStorage.getItem("username")}`);
  };

  render() {
    return (
      <form onSubmit={this.postArticle}>
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
        <button>Add Article</button>
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
  { addArticle }
)(ArticleForm);
