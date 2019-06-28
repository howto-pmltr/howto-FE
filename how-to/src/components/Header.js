import React from "react";
import { connect } from "react-redux"
import { logout } from "../actions"

import LoggedInHeader from "./LoggedInHeader"
import LoggedOutHeader from "./LoggedOutHeader"

import styled from "styled-components"

class Header extends React.Component {
  signOut = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    this.props.logout()
  };

  render() {
    return (
      <HeaderDiv>
        {//Checks if user is logged in. If they are not, they receive the logged out header. If they are they receive the logged in header.
          !localStorage.getItem("userID")
            ? <LoggedOutHeader />
            : <LoggedInHeader signOut={this.signOut} history={this.props.history} />}
      </HeaderDiv>
    );
  }
}

const HeaderDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-top: 2rem;
@media (max-width: 500px) {
  flex-direction: column;
}`
const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
