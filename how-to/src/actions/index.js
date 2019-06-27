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

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_SUCCESS })
}

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
      localStorage.setItem("userID", res.data.user.id);
      localStorage.setItem("username", res.data.user.username);
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

export const fetchArticle = id => dispatch => {
  const url = !id ? "/articles" : `/users/${id}/articles`;

  dispatch({ type: FETCH_ARTICLES_START });
  axiosWithAuth()
    .get(url)
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_ARTICLES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: FETCH_ARTICLES_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const FIND_SPECIFIC_ARTICLE_START = "FIND_SPECIFIC_ARTICLE_START";
export const FIND_SPECIFIC_ARTICLE_SUCCESS = "FIND_SPECIFIC_ARTICLE_SUCCESS";
export const FIND_SPECIFIC_ARTICLE_FAILURE = "FIND_SPECIFIC_ARTICLE_FAILURE";

export const findSpecificArticle = id => dispatch => {
  dispatch({ type: FIND_SPECIFIC_ARTICLE_START });
  axiosWithAuth()
    .get(`/articles/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FIND_SPECIFIC_ARTICLE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FIND_SPECIFIC_ARTICLE_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const TOGGLE_EDITING_ARTICLE = "TOGGLE_EDITING_ARTICLE"

export const toggleEditArticle = () => dispatch => {
  dispatch({ type: TOGGLE_EDITING_ARTICLE })
}

export const ADD_ARTICLE_START = "ADD_ARTICLE_START"
export const ADD_ARTICLE_SUCCESS = "ADD_ARTICLE_SUCCESS";
export const ADD_ARTICLE_FAILURE = "ADD_ARTICLE_FAILURE";

export const addArticle = newArticle => dispatch => {
  dispatch({ type: ADD_ARTICLE_START })
  axiosWithAuth()
    .post(`/users/${newArticle.userID}/articles`, newArticle)
    .then(res => {
      console.log(newArticle);
      dispatch({ type: ADD_ARTICLE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_ARTICLE_FAILURE, payload: "error" });
    });
};

export const EDIT_ARTICLE_SUCCESS = "EDIT_ARTICLE_SUCCESS";
export const EDIT_ARTICLE_FAILURE = "EDIT_ARTICLE_FAILURE";

export const editArticle = editedArticle => dispatch => {
  axiosWithAuth()
    .put(`/users/${editedArticle.userID}/articles/${editedArticle.articleID}`, editedArticle)
    .then(res => {
      dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: err.response.data.error })
    })
}

export const DELETE_ARTICLE_SUCCESS = "DELETE_ARTICLE_SUCCESS";
export const DELETE_ARTICLE_FAILURE = "DELETE_ARTICLE_FAILURE";

export const deleteArticle = id => dispatch => {
  axiosWithAuth()
    .delete(`/users/${localStorage.getItem("userID")}/articles/${id}`)
    .then(res => {
      dispatch({ type: DELETE_ARTICLE_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({
        type: DELETE_ARTICLE_FAILURE,
        payload: err.response.data.error
      });
    });
};

export const ADD_STEP_SUCCESS = "ADD_STEP_SUCCESS";
export const ADD_STEP_FAILURE = "ADD_STEP_FAILURE";

export const addStep = newStep => dispatch => {
  axiosWithAuth()
    .post(
      `/users/${newStep.userID}/articles/${newStep.article_id}/steps`,
      newStep
    )
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_STEP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_STEP_FAILURE, payload: err.response.data.error });
    });
};

export const TOGGLE_EDITING_STEP = "TOGGLE_EDITING_STEP"

export const toggleEditStep = () => dispatch => {
  dispatch({ type: TOGGLE_EDITING_STEP })
}

export const EDIT_STEP_SUCCESS = "EDIT_STEP_SUCCESS"
export const EDIT_STEP_FAILURE = "EDIT_STEP_FAILURE"

export const editStep = editedStep => dispatch => {
  axiosWithAuth()
    .put(`/users/${editedStep.userID}/articles/${editedStep.articleID}/steps/${editedStep.stepID}`, editedStep)
    .then(res => {
      dispatch({ type: EDIT_STEP_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: EDIT_STEP_FAILURE, payload: err.response.data.error })
    })
}

export const DELETE_STEP_SUCCESS = "DELETE_STEP_SUCCESS";
export const DELETE_STEP_FAILURE = "DELETE_STEP_FAILURE";

export const deleteStep = (article_id, step_id) => dispatch => {
  axiosWithAuth()
    .delete(
      `/users/${localStorage.getItem(
        "userID"
      )}/articles/${article_id}/steps/${step_id}`
    )
    .then(res => {
      dispatch({ type: DELETE_STEP_SUCCESS, payload: step_id });
    })
    .catch(err => {
      dispatch({ type: DELETE_STEP_FAILURE, payload: err.response.data.error });
    });
};

export const FETCH_TAGS_START = "FETCH_TAGS_START";
export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_TAGS_FAILURE = "FETCH_TAGS_FAILURE";

export const fetchTags = () => dispatch => {
  //const url = `/articles/${id}/tags`;

  dispatch({ type: FETCH_TAGS_START });
  axiosWithAuth()
    .get(`/tags`)
    .then(res => {
      dispatch({ type: FETCH_TAGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_TAGS_FAILURE, payload: err.response.data.error });
    });
};

export const ADD_ARTICLE_TAGS_SUCCESS = "ADD_ARTICLE_TAGS_SUCCESS";
export const ADD_ARTICLE_TAGS_FAILURE = "ADD_ARTICLE_TAGS_FAILURE";

export const addArticleTags = (tag_title, articleID) => dispatch => {
  axiosWithAuth()
    .post(`/articles/${articleID}/tags`, { tag_title })
    .then(res => {
      dispatch({ type: ADD_ARTICLE_TAGS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_ARTICLE_TAGS_FAILURE, payload: { tag_title } });
    });
};

export const ADD_TAGS_SUCCESS = "ADD_TAGS_SUCCESS"
export const ADD_TAGS_FAILURE = "ADD_TAGS_FAILURE"

export const addTags = title => dispatch => {
  axiosWithAuth()
    .post("/tags", { title })
    .then(res => {
      dispatch({ type: ADD_TAGS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_ARTICLE_TAGS_FAILURE, payload: err.response.data.error })
    })
}

export const DELETE_TAGS_SUCCESS = "DELETE_TAGS_SUCCESS";
export const DELETE_TAGS_FAILURE = "DELETE_TAGS_FAILURE";

export const deleteTags = (articleID, tagID) => dispatch => {
  axiosWithAuth()
    .delete(`/articles/${articleID}/tags/${tagID}`)
    .then(res => {
      dispatch({ type: DELETE_TAGS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DELETE_TAGS_FAILURE, payload: err.response.data.error })
    })
};

/*export const SEARCH_BY_TAGS_SUCCESS = "SEARCH_BY_TAGS"

export const fetchArticle = tag => dispatch => {
  axiosWithAuth()
    .get("/articles")
    .then(res => {
      console.log(res);
      dispatch({ type: SEARCH_BY_TAGS_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({
        type: FETCH_ARTICLES_FAILURE,
        payload: err.response.data.error
      });
    });
};*/

export const SEARCH_BY_AUTHOR_SUCCESS = "SEARCH_BY_AUTHOR_SUCCESS"
export const SEARCH_BY_AUTHOR_FAILURE = "SEARCH_BY_AUTHOR_FAILURE"

export const fetchByAuthor = query => dispatch => {
  axiosWithAuth()
    .get(`/articles/?tag=${query}`)
    .then(res => {
      dispatch({ type: SEARCH_BY_AUTHOR_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({
        type: SEARCH_BY_AUTHOR_FAILURE, payload: err.response.data.error
      })
    })
}

export const SEARCH_BY_TEXT_SUCCESS = "SEARCH_BY_AUTHOR_SUCCESS"
export const SEARCH_BY_TEXT_FAILURE = "SEARCH_BY_AUTHOR_FAILURE"

export const fetchByText = query => dispatch => {
  axiosWithAuth()
    .get(`/articles/?q=${query}`)
    .then(res => {
      dispatch({ type: SEARCH_BY_TEXT_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({
        type: SEARCH_BY_TEXT_FAILURE, payload: err.response.data.error
      })
    })
}



