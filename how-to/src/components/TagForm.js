import React from "react";
import { connect } from "react-redux";
import { addTags } from "../actions";

class TagForm extends React.Component {
  state = {
    title: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postTag = e => {
    e.preventDefault();
    console.log(this.props.articles);
    console.log(this.state.title);
    this.props.addTags(this.state.title, this.props.articles.id);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.postTag}>
        <input
          autoFocus={true}
          placeholder="Title"
          onChange={this.handleChanges}
          value={this.state.title}
          name="title"
        />
        <button>Add Tag</button>
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
  { addTags }
)(TagForm);
