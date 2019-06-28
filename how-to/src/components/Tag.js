import React from "react"
import Chip from '@material-ui/core/Chip';
import Rotate from 'react-reveal/Rotate';

class Tag extends React.Component {



    render() {
        return (
            <Rotate cascade>
                <Chip
                    label={this.props.tag.title}
                    onClick={() => this.props.tagSearch(this.props.tag.title)}
                />
            </Rotate>
        )
    }
}

export default Tag;