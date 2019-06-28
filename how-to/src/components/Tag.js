import React from "react"
import Chip from '@material-ui/core/Chip';

class Tag extends React.Component {



    render() {
        return <Chip
            label={this.props.tag.title}
            onClick={() => this.props.tagSearch(this.props.tag.title)}
        />
    }
}

export default Tag;