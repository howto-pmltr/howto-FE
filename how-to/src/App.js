import React from "react";
import { Route } from "react-router-dom";

//styles
import "./styles/App.css";

//components
import Home from "./components/Home"
import Header from "./components/Header.js";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ArticleContainer from "./components/ArticleContainer";
import ArticleForm from "./components/ArticleForm";
import PrivateRoute from "./components/PrivateRoute";
import ArticlePage from "./components/ArticlePage";
import TagPage from "./components/TagPage"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/search" component={SearchBar} />
      <Route exact path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/newpost" component={ArticleForm} />
      <Route exact path="/articles/:id" component={ArticlePage} />
      <PrivateRoute exact path="/home" component={ArticleContainer} />
      <PrivateRoute
        path={`/${localStorage.getItem("userID")}`}
        component={ArticleContainer}
      />
      <PrivateRoute exact path="/searchresults" component={ArticleContainer} />
      <Route exact path="/tags" component={TagPage} />
    </div>
  );
}

export default App;

