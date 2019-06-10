import React from "react";
import logo from "./images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />

        <p>This page is under construction</p>
        <iframe
          src="https://giphy.com/embed/JIX9t2j0ZTN9S"
          width="200"
          height="200"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        />
      </header>
    </div>
  );
}

export default App;
