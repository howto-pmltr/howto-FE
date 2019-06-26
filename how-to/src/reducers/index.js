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
  ADD_ARTICLE_FAILURE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  FIND_SPECIFIC_ARTICLE_START,
  FIND_SPECIFIC_ARTICLE_SUCCESS,
  FIND_SPECIFIC_ARTICLE_FAILURE,
  ADD_STEP_SUCCESS,
  ADD_STEP_FAILURE,
  DELETE_STEP_SUCCESS,
  DELETE_STEP_FAILURE,
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE
} from "../actions";

const initialState = {
  articles: [],
  loggingIn: false,
  fetching: false,
  registering: false,
  steps: [],
  tags: [],
  error: "",
  tagError: ""
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
    case FIND_SPECIFIC_ARTICLE_START:
      return {
        ...state,
        fetching: true,
        error: ""
      };
    case FIND_SPECIFIC_ARTICLE_SUCCESS:
      return {
        ...state,
        fetching: false,
        articles: action.payload,
        steps: action.payload.steps
      };
    case FIND_SPECIFIC_ARTICLE_FAILURE:
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
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: state.articles.filter(
          article => article.id !== action.payload
        ),
        error: ""
      };
    case DELETE_ARTICLE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case ADD_STEP_SUCCESS:
      return {
        ...state,
        steps: action.payload,
        error: ""
      };
    case ADD_STEP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case DELETE_STEP_SUCCESS:
      return {
        ...state,
        steps: state.steps.filter(step => step.id !== action.payload),
        error: ""
      };
    case DELETE_STEP_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_TAGS_START:
      return {
        ...state,
        fetching: true,
        tagError: ""
      };
    case FETCH_TAGS_SUCCESS:
      return {
        ...state,
        fetching: false,
        tags: action.payload,
        tagError: ""
      };
    case FETCH_TAGS_FAILURE:
      return {
        ...state,
        fetching: false,
        tagError: action.payload
      };
    default:
      return state;
  }
};
