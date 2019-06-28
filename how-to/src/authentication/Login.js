import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

import styled from "styled-components"
import { Paper, TextField, Button } from "@material-ui/core";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  loginHere = e => {
    e.preventDefault();
    console.log(this.state.credentials);
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/home");
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
        <Paper className="signUpsignIn">
          <h1>How To</h1>
          <LoginForm onSubmit={this.loginHere}>
            <TextField
              autoFocus={true}
              placeholder="Username"
              autocapitalize="none"
              onChange={this.handleChanges}
              name="username"
              value={this.state.credentials.username}
              variant="outlined"
              margin="normal"
            />
            <TextField
              type="password"
              placeholder="Password"
              onChange={this.handleChanges}
              name="password"
              value={this.state.credentials.password}
              variant="outlined"
              margin="normal"
            />
            <LoginButton
              type="submit"
              variant="contained"
              color="primary"
            >{this.props.loggingIn ? "Logging in.." : "Log In"}</LoginButton>
          </LoginForm>
          <div>
            {this.props.error !== ""
              ? this.props.error.message
              : null}
          </div>
        </Paper>
      </div>
    );
  }
}

const LoginForm = styled.form`
display: flex;
flex-direction: column`

const LoginButton = styled(Button)({
  background: "linear-gradient(#e66465, #9198e5)",
  height: "3rem"
});

const mapStateToProps = state => ({
  loggingIn: state.loggingIn,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
