import React from "react";
import StepForm from "./StepForm"
import { CardMedia, Typography, CardContent, CardActionArea, IconButton, Tooltip } from "@material-ui/core"

//styles
import styled from "styled-components";

class Step extends React.Component {
  removeStep = e => {
    e.preventDefault();
    this.props.deleteStep(this.props.article_id, this.props.step.id);
  };

  render() {
    console.log(this.props.step)
    return (
      <div>
        <CardActionArea>
          <CardImage
            image={`${this.props.step.image_path}`}
            title={`${this.props.step.title}`} />
          {this.props.editingStep === true
            ? <StepForm stepInfo={this.props.step} />
            : <CardContent>
              <Typography component="h6">
                Step #{this.props.stepNumber} : {this.props.step.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.step.content}
              </Typography>
            </CardContent>}
        </CardActionArea >
        {this.props.userControls === true ? <Tooltip title="Delete">
          <IconButton onClick={this.removeStep}><i className="fas fa-trash-alt" /></IconButton>
        </Tooltip> : null}
      </div >

    );
  }
}


const CardImage = styled(CardMedia)({
  padding: "25%"
});

export default Step;
