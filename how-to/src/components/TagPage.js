import React from "react"
import { connect } from "react-redux";
import { fetchTags, fetchByTag } from "../actions"
import Tag from "./Tag"

class TagPage extends React.Component {

    componentDidMount() {
        this.props.fetchTags()
    }

    tagSearch = (tag) => {
        this.props.fetchByTag(tag)
        this.props.history.push("/searchresults");
    }

    render() {
        console.log(this.props.tags)
        return (
            this.props.tags.map(tag => {
                return <Tag key={tag.id} tag={tag} tagSearch={this.tagSearch} />
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
    { fetchTags, fetchByTag }
)(TagPage);