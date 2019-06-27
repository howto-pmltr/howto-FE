import React from "react"
import { connect } from "react-redux"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

class CommentSection extends React.Component {
    render() {
        return (
            <div>
                Comments
                <div>
                    <h3>Jarred</h3>
                    <p>Hello</p>
                    <button>Delete</button>
                </div>
                {this.props.comments ? this.props.comments.map(comment => {
                    return <Comment comment={comment} />
                }) : null}
                <CommentForm />
            </div>
        )
    }
}

export default CommentSection;