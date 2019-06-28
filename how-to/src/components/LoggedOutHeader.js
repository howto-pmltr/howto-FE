import React from "react"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class LoggedOutHeader extends React.Component {
    render() {
        return (
            <div>
                <div>How To</div>
                <Link to="/signup">
                    <Button>Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button>Log In</Button>
                </Link>
            </div>
        )
    }
}

export default LoggedOutHeader;