import React from "react";
import { connect } from "react-redux";
import { signUp } from "../actions";


//styles
import styled from "styled-components"
import { Paper, TextField, Button } from "@material-ui/core";

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
      if (this.props.error === "") {
        this.props.history.push("/home");
      }
    });
    this.setState({ credentials: { password: "" } })
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
          <RegistrationForm onSubmit={this.signUpHere}>
            <TextField
              autoFocus={true}
              placeholder="Email"
              onChange={this.handleChanges}
              name="email"
              value={this.state.credentials.email}
              variant="outlined"
              margin="normal"
            />
            <TextField
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
              color="primary">
              {this.props.registering
                ? "Signing Up..."
                : "Sign Up"}
            </LoginButton>
          </RegistrationForm>
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

const RegistrationForm = styled.form`
display: flex;
flex-direction: column`

const LoginButton = styled(Button)({
  background: "linear-gradient(#e66465, #9198e5)",
  height: "3rem"
});

const mapStateToProps = state => ({
  registering: state.registering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { signUp }
)(Register);
