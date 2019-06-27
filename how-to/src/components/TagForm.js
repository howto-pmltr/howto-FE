import React from "react";
import { connect } from "react-redux";
import { addTags, addArticleTags } from "../actions";

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
            <form onSubmit={this.postTag}>
                <input
                    autoFocus={true}
                    placeholder="Title"
                    onChange={this.handleChanges}
                    value={this.state.title}
                    name="title"
                />
                <button>Add Tag</button>
            </form>
        );
    }
}

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
