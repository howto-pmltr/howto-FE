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
border: 2px solid black;
background-color: white;
padding: 2rem;
position: fixed;
top: 200px;
@media (min-width: 650px) {
left: 20%
}
width: 50%;
height: 40%;
display: flex
flex-direction: row;
flex-flow: wrap
justify-content: space-between
align-items: center
margin: auto;
@media (max-width: 650px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0
    width: 90%;
    left: 5%;
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