import React, { Component } from "react";
import cv from "../images/CV.pdf";
import logo from "../images/logo-header/logo_header.svg";
import close from "../images/sideMenu/close.svg";
import bg from "../images/sideMenu/sideNavBG.svg";
class SideBar extends Component {
  state = {};
  openSlideMenu() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("content").style.marginLeft = "100%";
  }
  closeSlideMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
  }

  render() {
    const menus = ["Home", "About me", "Portfolio", "Contact"];
    const navLinks = menus.map(menuText => {
      // this will do this code for each word of the array
      return (
        <a
          onClick={this.closeSlideMenu.bind(this)}
          className="l"
          href={"#" + menuText}
        >
          <span>{menuText + " /"} </span>
        </a>
      );
    });

    return (
      <div id="content">
        <span className="slide">
          <a href="#" onClick={this.openSlideMenu.bind(this)}>
            <i className="fas fa-bars" />
          </a>
        </span>
        <div id="menu" className="nav">
          <div>
            <img className="nav-bg" src={bg} alt="bg" />
          </div>
          <a
            href="#home"
            className="close"
            onClick={this.closeSlideMenu.bind(this)}
          >
            <img src={close} alt="close" width="23" />
          </a>
          <div>
            <img className="nav-logo" src={logo} alt="logo" />
          </div>
          <div className="nav-text">{navLinks}</div>
          <div className="slide-contact">
            <a href="tel:+351 962 350 734" title="ligar">
              <span className="slide-number">+(351) 962 350 734</span>
            </a>
            <a
              href="mailto:diogosantana1997@outlook.pt?subject=E-mail site"
              title="Enviar e-mail"
            >
              <span className="slide-email">diogosantana1997@outlook.pt</span>
            </a>
          </div>
          <div className="nav-cv">
            <span className="inline">
              <a href={cv} title="download cv" download>
                <span className="slide-cv">
                  <i className="fas fa-long-arrow-alt-right " />
                  <span className="fontowesome-padding">curriculum vitae</span>
                </span>
              </a>
            </span>
          </div>
          <div className="nav-socials">
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
      </div>
    );
  }
}

export default SideBar;
