import React from "react";

//components
import ArticleHeader from "./ArticleHeader";
import Steps from "./Steps";

//styles
import styled from "styled-components";

class ArticleContainer extends React.Component {
  state = {
    title: "How to participate in a focus group",
    img: "https://miro.medium.com/max/1400/1*AhUWAcuew-QFVAe7jPw87g.jpeg",
    alt: "Car ideas",
    description:
      "Preventing your steeling wheel from flying off while you drive.",
    steps: [
      {
        stepNumber: 1,
        img: "https://i.imgur.com/EP1LSZP.gif",
        alt: "Keep Quiet",
        description:
          "The first step to being great at focus groups is to stay quiet unless you have a constructive suggestion. Paul is classically bad at this."
      },
      {
        stepNumber: 2,
        img: "https://i.imgur.com/5Z6pkyW.gif",
        alt: "The Best",
        description:
          "The next step to wowing your fellow focus groupees is confidence."
      },
      {
        stepNumber: 3,
        img: "https://i.imgur.com/Hk6KTgQ.gif",
        alt: "Give credit",
        description: "If a fellow groupee has a great idea, let them know!"
      },
      {
        stepNumber: 4,
        img: "https://media1.giphy.com/media/McJTqbcBNPDRu1JD9P/source.gif",
        alt: "winning",
        description: "Celebrate your achievements."
      },
      {
        stepNumber: 5,
        img: "https://i.giphy.com/media/1fnXzh7pB7C6I5BE7g/giphy.webp",
        alt: "finito",
        description: " now you have to marry your mother in law!!"
      }
    ]
  };

  render() {
    return (
      <ArticleBox>
        <ArticleHeader
          title={this.state.title}
          image={this.state.img}
          alt={this.state.alt}
          description={this.state.description}
        />
        <Steps steps={this.state.steps} />
      </ArticleBox>
    );
  }
}

const ArticleBox = styled.div`
  width: 75%;
  margin: auto;
`;

export default ArticleContainer;
