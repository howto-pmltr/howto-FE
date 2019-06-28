import React from "react";
import { connect } from "react-redux";
import { addTags, addArticleTags } from "../actions";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components"

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
        this.props.addArticleTags(this.state.title, this.props.articles.id);
        this.props.addTags(this.state.title)
        this.setState({
            title: ""
        });
    };

    render() {
        return (
            <TagFormStyle onSubmit={this.postTag}>
                <TextField
                    autoFocus={true}
                    placeholder="Enter Tag"
                    onChange={this.handleChanges}
                    value={this.state.title}
                    name="title"
                    variant="outlined"
                />
                <TagButton type="submit" >Add Tag</TagButton>
            </TagFormStyle>
        );
    }
}

const TagFormStyle = styled.form`
margin-bottom: 4rem`

const TagButton = styled(Button)({
    background: "#621295 !important",
    color: "white !important",
    height: "3.5rem"
});

const mapStateToProps = state => {
    return {
        articles: state.articles,
        error: ""
    };
};
export default connect(
    mapStateToProps,
    { addTags, addArticleTags }
)(TagForm);
