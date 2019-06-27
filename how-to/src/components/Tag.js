import React from "react"

class Tag extends React.Component {



    render() {
        return <button onClick={() => this.props.tagSearch(this.props.tag.title)}>{this.props.tag.title}</button>
    }
}

export default Tag;