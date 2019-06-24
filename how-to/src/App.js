import React from "react";

//styles
import "./styles/App.css";

//components
import Header from "./components/Header.js";
import Login from "./authentication/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
