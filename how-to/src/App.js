import React from "react";
import { Route } from "react-router-dom";

//styles
import "./styles/App.css";

//components
import Header from "./components/Header.js";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ArticleContainer from "./components/ArticleContainer";
import ArticleForm from "./components/ArticleForm";
import PrivateRoute from "./components/PrivateRoute";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/newpost" component={ArticleForm} />
      <Route exact path="/articles/:id" component={ArticlePage} />
      <PrivateRoute exact path="/home" component={ArticleContainer} />
      <PrivateRoute
        path={`/${localStorage.getItem("userID")}`}
        component={ArticleContainer}
      />
    </div>
  );
}

export default App;
