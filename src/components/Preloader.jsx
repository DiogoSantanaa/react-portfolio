import React, { Component } from "react";
import logo from "../images/logo_gif.gif";
import "./css/Preloader.css";

// console.log(logo);

class Preloader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="row">
          <div className="col-sm text-center">
            <img src={logo} alt="logo" />

            <div className="typing">
              <p>Loading . . .</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
