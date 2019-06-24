import axios from "axios";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  console.log(creds);
  return axiosWithAuth()
    .post("/users/signin", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.error });
      return err.response.data.error;
    });
};

export const REGISTER_START = "REGISTER_ START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const signUp = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  console.log(creds);
  return axiosWithAuth()
    .post("/users/signup", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload.token);
      dispatch({ type: REGISTER_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.error });
      return err.response.data.error;
    });
};
