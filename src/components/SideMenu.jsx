import React, { Component } from "react";
import cv from "../images/CV.pdf";
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
      // this will this code for each word of the array menu
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
          <a
            href="#home"
            className="close"
            onClick={this.closeSlideMenu.bind(this)}
          >
            <i className="fas fa-times" />
          </a>
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
            <span className="inline">
              <a href={cv} title="download cv" download>
                <span className="slide-cv">
                  <i className="fas fa-long-arrow-alt-right " />
                  <span className="fontowesome-padding">curriculum vitae</span>
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
