import React, { Component } from "react";
import logo from "../images/logo-header/logo.png";
class Borders extends Component {
  state = {};
  render() {
    return (
      <div className="borders">
        <div className="top">
          <a className="navbar-brand " href="https://www.wokine.com/en">
            <img src={logo} alt="logo" width="35" />
            <div className="sub-page" />
          </a>
        </div>

        <div className="left" />
        <div className="right" />
      </div>
    );
  }
}

export default Borders;
