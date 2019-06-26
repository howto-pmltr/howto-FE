import React from "react";
import { connect } from "react-redux"
import { deleteTags } from "../actions"

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
        return (
            <div>
                <div onClick={this.toggleTag}>{this.props.tag.tag_title}</div>
                {this.state.edit === true ? <button onClick={this.deleteTag}>x</button> : null}
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