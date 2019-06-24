import React from "react";

//styles
import styled from "styled-components";

class ArticleHeader extends React.Component {
  render() {
    return (
      <TitleBox>
        <h1>{this.props.title}</h1>
        <TitleImg src={`${this.props.image}`} alt={`${this.props.alt}`} />
        <h3>{this.props.description}</h3>
      </TitleBox>
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
