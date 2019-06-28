import React from "react"
import { connect } from "react-redux";
import { fetchTags, fetchByTag } from "../actions"
import Tag from "./Tag"

import styled from "styled-components"

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
            <TagHolder>
                {this.props.tags.map(tag => {
                    return <Tag key={tag.id} tag={tag} tagSearch={this.tagSearch} />
                })}
            </TagHolder>
        )
    }
}

//styled comoponents
const TagHolder = styled.div`
margin-top: 20vh
border: 2px solid black;
background-color: white;
padding: 5rem;
display: flex
justify-content: space-evenly;
align-items: center
flex-direction: row;
flex-flow: wrap
@media (max-width: 500px) {
    padding: 0
    width: 95%;
    max-width: 480px
    height: 500px
  }`
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