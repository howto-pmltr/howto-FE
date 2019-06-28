import React from "react"
import { connect } from "react-redux"
import { addComment } from "../actions"

class CommentForm extends React.Component {
    state = {
        message: ""
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postComment = e => {
        e.preventDefault()
        console.log(this.props.articles.id)
        console.log(this.state.message)
        this.props.addComment(this.props.articles.id, this.state.message)
    }
    render() {

        return (
            <div>
                <form onSubmit={this.postComment}>
                    <input
                        name="message"
                        placeholder="message"
                        value={this.state.message}
                        onChange={this.handleChanges} />
                    <button>Post Comment</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments,
        error: "",
        articles: state.articles
    };
};
export default connect(
    mapStateToProps,
    { addComment }
)(CommentForm);
