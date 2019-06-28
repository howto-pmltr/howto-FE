import React from "react"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import styled from "styled-components"

class LoggedInHeader extends React.Component {
    render() {
        return (
            <div>
                <Link to="/home">
                    <HeaderButton variant="contained">Home</HeaderButton>
                </Link>
                <Link
                    to={
                        localStorage.getItem("userID")
                            ? `/${localStorage.getItem("userID")}`
                            : "/login"
                    }
                >
                    <HeaderButton variant="contained">Profile</HeaderButton>
                </Link>

                <Link to="/login">
                    <HeaderButton variant="contained" onClick={this.props.signOut}>Log Out</HeaderButton>
                </Link>
                <Link to="/newpost">
                    <HeaderButton variant="contained">Post Tutorial</HeaderButton>
                </Link>
                <Link to="/tags">
                    <HeaderButton variant="contained">Browse Tags</HeaderButton>
                </Link>
            </div>
        )
    }
}

const HeaderButton = styled(Button)({
    background: "primary",
    height: "3rem"
});

export default LoggedInHeader;