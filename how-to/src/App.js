import React from "react";
import { Route } from "react-router-dom";

//styles
import "./styles/App.css";

//components
import Header from "./components/Header.js";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import ArticleContainer from "./components/ArticleContainer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/home" component={ArticleContainer} />
    </div>
  );
}

export default App;
