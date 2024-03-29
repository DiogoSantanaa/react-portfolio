import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/css/Main.css";
//import App from "./App";
import Icons from "./components/Icons";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Borders from "./components/Borders";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import * as serviceWorker from "./serviceWorker";

class App extends Component {
  render() {
    return (
      <div>
        <Icons />
        <SideMenu />
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Borders />
        <Footer />
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
