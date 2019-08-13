import React, { Component } from "react";
import logo from "../images/logo-header/logo.png";
class Icons extends Component {
  state = {};
  render() {
    return (
      <section className="icons">
        <a className="navbar-brand logo-top" href="#home">
          <img src={logo} title="logo" width="35" />
          <div className="sub-page" />
        </a>
      </section>
    );
  }
}

export default Icons;
