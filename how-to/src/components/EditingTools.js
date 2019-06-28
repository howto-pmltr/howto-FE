import React from "react"

import { Tooltip, IconButton, FormGroup, FormControlLabel, Switch } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

class EditingTools extends React.Component {
    render() {
        return (
            <div>
                <Tooltip title="Edit">
                    <IconButton aria-label="Edit Article" onClick={this.props.editPost}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton aria-label="Edit Article" onClick={this.props.removePost}>
                        <i className="fas fa-trash-alt" color="#c40b13" />
                    </IconButton>
                </Tooltip>
                {this.props.published === null
                    ? <FormGroup>
                        <FormControlLabel
                            control={<Switch onChange={this.props.togglePublishPost} />}
                            label="Publish" />
                    </FormGroup>
                    : null}
            </div>
        )
    }
}

export default EditingTools;