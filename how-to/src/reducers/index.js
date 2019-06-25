import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_ARTICLES_START,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE
} from "../actions";

const initialState = {
  articles: [],
  loggingIn: false,
  fetching: false,
  registering: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ""
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case REGISTER_START:
      return {
        ...state,
        registering: true,
        error: ""
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        error: ""
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        error: action.payload
      };
    case FETCH_ARTICLES_START:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        fetching: false,
        articles: action.payload,
        error: ""
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        error: ""
      };
    case ADD_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
