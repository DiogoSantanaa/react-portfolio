import React, { Component } from "react";
import logo from "../images/logo-header/logo.png";
class Icons extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="icons">
          <a className="navbar-brand logo-top" href="#Home">
            <img src={logo} alt="logo" width="35" />
            <div className="sub-page" />
          </a>
        </div>
        <div id="socials">
          <ul>
            <li>
              <a
                href="mailto:diogosantana1997@outlook.pt?subject=E-mail site"
                title="Enviar e-mail"
              >
                <i className="fas fa-envelope" />
              </a>
            </li>
            <li>
              <a href="https://github.com/DiogoSantanaa" target="_blank">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/diogo-santana-2ab871187/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Icons;
