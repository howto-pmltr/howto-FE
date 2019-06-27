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
        console.log(this.props)
        return (
            <div>
                <button onClick={() => this.props.tagSearch(this.props.tag.tag_title)}>{this.props.tag.tag_title}</button>
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
