import React from "react";
import { connect } from "react-redux";

import { signUp } from "../actions";

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      email: "",
      password: ""
    }
  };

  signUpHere = e => {
    e.preventDefault();
    this.props.signUp(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/protected");
      }
    });
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>How To</h1>
          <form onSubmit={this.signUpHere}>
            <input
              placeholder="Email"
              onChange={this.handleChanges}
              name="email"
              value={this.state.credentials.email}
            />
            <input
              placeholder="Username"
              onChange={this.handleChanges}
              name="username"
              value={this.state.credentials.username}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChanges}
              name="password"
              value={this.state.credentials.password}
            />
            <button>
              {this.props.registering ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registering: state.registering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { signUp }
)(Register);
