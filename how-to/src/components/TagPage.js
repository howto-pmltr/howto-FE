import React from "react"
import { connect } from "react-redux";
import { fetchTags } from "../actions"

class TagPage extends React.Component {

    componentDidMount() {
        this.props.fetchTags()
    }

    searchTags = e => {
        e.preventDefault()

    }
    render() {
        console.log(this.props.tags)
        return (
            this.props.tags.map(tag => {
                return <div key={tag.id}>{tag.title}</div>
            }))
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        tags: state.tags,
        articles: state.articles
    };
};

export default connect(
    mapStateToProps,
    { fetchTags }
)(TagPage);