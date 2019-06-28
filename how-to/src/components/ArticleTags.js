import React from "react";
import { connect } from "react-redux"
import { deleteTags } from "../actions"
import Chip from '@material-ui/core/Chip';

class ArticleTags extends React.Component {
    state = {
        edit: false
    }

    toggleTag = e => {
        e.preventDefault()
        this.setState({ edit: !this.state.edit })
    }

    deleteTag = e => {
        e.preventDefault()
        e.stopPropagation();
        this.props.deleteTags(this.props.articleID, this.props.tag.id)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Chip
                    label={this.props.tag.tag_title}
                    onClick={() => this.props.tagSearch(this.props.tag.tag_title)}
                    onDelete={this.deleteTag}
                    variant="outlined"
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { deleteTags }
)(ArticleTags);
