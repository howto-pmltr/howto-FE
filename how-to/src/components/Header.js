import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
  logOut = e => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userID");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div>How To</div>
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
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/login">
          <button onClick={this.logOut}>Log Out</button>
        </Link>
        <Link to="/newpost">
          <button>Post Tutorial</button>
        </Link>
      </div>
    );
  }
}

export default Header;
