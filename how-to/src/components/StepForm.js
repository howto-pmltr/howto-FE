import React from "react";
import { addStep } from "../actions";
import { connect } from "react-redux";

class StepForm extends React.Component {
  state = {
    title: "",
    content: "",
    image_path: "",
    step_number: 1
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postStep = e => {
    e.preventDefault();
    const newStep = {
      title: this.state.title,
      content: this.state.content,
      image_path: this.state.image_path,
      userID: Number(localStorage.getItem("userID")),
      step_number: this.state.step_number,
      article_id: this.props.articles.id
    };
    console.log(newStep);
    this.props.addStep(newStep);
    this.setState(prevState => ({
      title: "",
      content: "",
      image_path: "",
      step_number: (prevState += 1)
    }));
  };

  render() {
    return (
      <form onSubmit={this.postStep}>
        <input
          autoFocus={true}
          placeholder="Title"
          onChange={this.handleChanges}
          value={this.state.title}
          name="title"
        />
        <input
          placeholder="Content"
          onChange={this.handleChanges}
          value={this.state.content}
          name="content"
        />
        <input
          placeholder="Image URL"
          onChange={this.handleChanges}
          value={this.state.image_path}
          name="image_path"
        />
        <button>Add Step</button>
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
  { addStep }
)(StepForm);
