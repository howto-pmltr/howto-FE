import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
  logOut = e => {
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div>
        <div>How To</div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/login">
          <button onClick={this.logOut}>Log Out</button>
        </Link>
      </div>
    );
  }
}

export default Header;
