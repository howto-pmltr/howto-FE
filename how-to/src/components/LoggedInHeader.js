import React from "react"
import { Link } from "react-router-dom";

import styled from "styled-components"
import SearchBar from "./SearchBar";
import { IconButton, Tooltip, AppBar, Toolbar } from '@material-ui/core/';

import LogoImg from "../assets/Logo.png"


class LoggedInHeader extends React.Component {
    render() {
        return (
            <AppBar color="default">
                <HeaderBar className="mediaQ">
                    <LogoSearch>
                        <Logo src={LogoImg} alt="Logo" />
                        <div>
                            <SearchBar history={this.props.history} />
                        </div>
                    </LogoSearch>
                    <IconHolder>
                        <Link to="/home">
                            <Tooltip title="Home" aria-label="Home">
                                <IconButton>
                                    <i className="fas fa-home" color="#621295" />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link
                            to={
                                localStorage.getItem("userID")
                                    ? `/${localStorage.getItem("userID")}`
                                    : "/login"
                            }>
                            <Tooltip title="Profile" aria-label="Profile">
                                <IconButton>
                                    <i className="fas fa-user-circle" color="#621295" />
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to="/tags">
                            <Tooltip title="Browse Hashtags" aria-label="Browse Hashtags">
                                <IconButton>
                                    <i className="fas fa-hashtag" color="#621295" />
                                </IconButton>
                            </Tooltip>
                        </Link>
                        <Link to="/newpost">
                            <Tooltip title="Post New Tutorial" aria-label="Post New Tutorial">
                                <IconButton>
                                    <i className="fas fa-upload" color="#c40b13" />
                                </IconButton>
                            </Tooltip>
                        </Link>

                        <Link to="/login">
                            <Tooltip title="Log Out" aria-label="Log Out">
                                <IconButton onClick={this.props.signOut} >
                                    <i className="fas fa-power-off" color="black" />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    </IconHolder>
                </HeaderBar>
            </AppBar>
        )
    }
}


//styled components
const Logo = styled.img`
width:25%`

const LogoSearch = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 50%;
@media (max-width: 690px) {
    flex-direction: column;
  }`

const IconHolder = styled.div`
display: flex;
flex-direction: row;
flex-flow: wrap;
width: 35 %;
justify-content: space-evenly; `

const HeaderBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1000px",
    marginLeft: "10%",
    marginRight: "10%"
});
export default LoggedInHeader;