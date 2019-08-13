import React from "react";
import { addArticle, editArticle, toggleEditArticle } from "../actions";
import { connect } from "react-redux";

//styles
import styled from "styled-components"
import { TextField, Button } from "@material-ui/core";
import RubberBand from 'react-reveal/RubberBand';

class ArticleForm extends React.Component {
  state = {
    title: "",
    description: "",
    image_path: "",
    article_id: "",
    published_at: null
  };

  componentDidMount() {
    console.log(this.props.postInfo)
    if (this.props.postInfo) {
      return this.setState({
        title: this.props.postInfo.title,
        description: this.props.postInfo.description,
        image_path: this.props.postInfo.image_path,
        articleID: this.props.postInfo.id,
        published_at: this.props.postInfo.published_at
      })
    }
  }

  handleChanges = e => {
    console.log(this.state)
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
    this.props.history.push("/me");
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
      published_at: this.state.published_at ? "true" : null
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
    return (
      <RubberBand>
        <FormBox>
          <StyledForm onSubmit={this.props.editingArticle === false ? this.postArticle : this.changeArticle}>
            <TextField
              placeholder="Title"
              onChange={this.handleChanges}
              value={this.state.title}
              name="title"
            />
            <TextField
              placeholder="Description"
              onChange={this.handleChanges}
              value={this.state.description}
              name="description"
            />
            <TextField
              placeholder="Image URL"
              onChange={this.handleChanges}
              value={this.state.image_path}
              name="image_path"
            />
            <Button type="submit">{this.props.editingArticle === false ? "Add Article" : "Submit Changes"}</Button>
          </StyledForm>
          <PaddedDiv />
        </FormBox>
      </RubberBand>
    );
  }
}

const FormBox = styled.div`
width: 75%;
padding-top: 36.25%;
padding-bottom:36.25%;
margin: auto;
min-height: 200px;
`;

const PaddedDiv = styled.div`
height: 52px;
margin: 0;
padding: 0;`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 75%;
    margin:auto;
    border: 2px solid black;
    background: white;
    padding: 2%;
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
