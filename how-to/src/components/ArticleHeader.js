import React from "react";
import { Link } from "react-router-dom";

//styles
import styled from "styled-components";

class ArticleHeader extends React.Component {
  removePost = e => {
    e.preventDefault();
    this.props.deletePost(this.props.article.id);
  };

  render() {
    console.log(this.props.article.title);
    return (
      <Link to={`/articles/${this.props.article.id}`} className="linkEdit">
        <TitleBox>
          <h1>{this.props.article.title}</h1>
          <h3>{this.props.article.description}</h3>
          <h2>{this.props.article.author_username}</h2>
        </TitleBox>
        <button onClick={this.deletePost}>X</button>
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
export default ArticleHeader;

/*<TitleImg src={`${this.props.image}`} alt={`${this.props.alt}`} />*/
