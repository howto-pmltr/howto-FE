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
      localStorage.setItem("userID", res.data.user.id);
      localStorage.setItem("username", res.data.user.username);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      console.log(axios);
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
      localStorage.setItem("token", res.data.token);
      dispatch({ type: REGISTER_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.error });
      return err.response.data.error;
    });
};

export const FETCH_ARTICLES_START = "FETCH_ARTICLES_START";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

export const fetchArticle = () => dispatch => {
  dispatch({ type: FETCH_ARTICLES_START });
  axiosWithAuth()
    .get("/articles")
    .then(res => {
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch(err =>
      dispatch({
        type: FETCH_ARTICLES_FAILURE,
        payload: err.response.data.error
      })
    );
};

export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE";

export const addArticle = newArticle => dispatch => {
  axiosWithAuth()
    .post("/articles", newArticle)
    .then(res => {
      console.log(newArticle);
      dispatch({ type: ADD_ARTICLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_ARTICLE_FAILURE, payload: err.response.data.error });
    });
};
