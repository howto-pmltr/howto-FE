import React from "react"
import { connect } from "react-redux"
import { deleteComment } from "../actions"

class Comment extends React.Component {

    removeComment = e => {
        this.props.deleteComment(this.props.comment.id)
    }

    render() {
        return (
            <div>
                <h2>{this.props.comment.username_author}</h2>
                <p>{this.props.comment.message}</p>
                <button>Delete</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { deleteComment }
)(Comment);
