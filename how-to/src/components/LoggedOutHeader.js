import React from "react"
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import LogoImg from "../assets/Logo.png"

import styled from "styled-components"

class LoggedOutHeader extends React.Component {

    linkToMarketing = () => {

    }
    render() {
        return (
            <LogInHeader>
                <Logo src={LogoImg} alt="Logo" />
                <Link to="/signup">
                    <SignUpButton variant="contained">Sign Up</SignUpButton>
                </Link>
                <Link to="/login">
                    <LogInButton variant="contained">Log In</LogInButton>
                </Link>
                <LearnButton variant="contained" href="https://hardcore-goodall-4c6937.netlify.com/">Learn More</LearnButton>
            </LogInHeader>
        )
    }
}

const Logo = styled.img`
width:25%`

const LogInHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding-top: 2rem`

const SignUpButton = styled(Button)({
    background: "#621295 !important",
    color: "white !important"
});


const LogInButton = styled(Button)({
    background: "#f69314 !important",
    color: "white !important",
});

const LearnButton = styled(Button)({
    background: "#c40b13 !important",
    color: "white !important"
});


export default LoggedOutHeader;

