import React from "react";
import { connect } from "react-redux"
import { logout } from "../actions"

import LoggedInHeader from "./LoggedInHeader"
import LoggedOutHeader from "./LoggedOutHeader"

class Header extends React.Component {
  signOut = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    this.props.logout()
  };

  render() {
    return (
      <div>
        {//Checks if user is logged in. If they are not, they receive the logged out header. If they are they receive the logged in header.
          !localStorage.getItem("userID")
            ? <LoggedOutHeader />
            : <LoggedInHeader signOut={this.signOut} history={this.props.history} />}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
