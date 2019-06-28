import React from "react";
import { connect } from "react-redux"
import { deleteTags } from "../actions"

import Chip from "@material-ui/core/Chip";

class ArticleTags extends React.Component {

    deleteTag = e => {
        e.preventDefault()
        e.stopPropagation();
        this.props.deleteTags(this.props.articleID, this.props.tag.id)
    }

    render() {
        console.log(this.props)
        return (
            <Chip
                label={this.props.tag.tag_title}
                onClick={() => this.props.tagSearch(this.props.tag.tag_title)}
                onDelete={this.deleteTag}
                variant="outlined"
            />
        );
    }
}


const mapStateToProps = state => {
    return {
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { deleteTags }
)(ArticleTags);
