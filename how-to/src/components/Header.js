import React from "react";

import { Link } from "react-router-dom";

class Header extends React.Component {
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
      </div>
    );
  }
}

export default Header;
