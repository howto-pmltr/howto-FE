import React from "react";
import { connect } from "react-redux"
import { logout } from "../actions"

import { Link } from "react-router-dom";

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
        <div>How To</div>
        {!localStorage.getItem("userID") ?
          <div>
            <Link to="/signup">
              <button>Sign Up</button>
            </Link>
            <Link to="/login">
              <button>Log In</button>
            </Link></div>
          : <div>
            <Link to="/home">
              <button>Home</button>
            </Link>
            <Link
              to={
                localStorage.getItem("userID")
                  ? `/${localStorage.getItem("userID")}`
                  : "/login"
              }
            >
              <button>Profile</button>
            </Link>

            <Link to="/login">
              <button onClick={this.signOut}>Log Out</button>
            </Link>
            <Link to="/newpost">
              <button>Post Tutorial</button>
            </Link>
            <Link to="/tags">
              <button>Browse Tags</button>
            </Link> </div>}


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
