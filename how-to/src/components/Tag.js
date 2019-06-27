import React from "react"

class Tag extends React.Component {
    render() {
        return <div onClick={this.props.tagSearch(this.props.tag.title)}>{this.props.tag.title}</div>
    }
}

export default Tag;