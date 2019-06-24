import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../actions";

const initialState = {
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
    default:
      return state;
  }
};
