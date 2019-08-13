import React, { Component } from "react";
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
          <div className="nav-text">
            <a
              onClick={this.closeSlideMenu.bind(this)}
              className="l"
              href="#home"
            >
              <span>Home /</span>
            </a>
            <a
              onClick={this.closeSlideMenu.bind(this)}
              className="l"
              href="#about"
            >
              <span>About me /</span>
            </a>
            <a
              onClick={this.closeSlideMenu.bind(this)}
              className="l"
              href="#portfolio"
            >
              <span>Portfolio /</span>
            </a>
            <a
              onClick={this.closeSlideMenu.bind(this)}
              className="l"
              href="#contact"
            >
              <span>Contact /</span>
            </a>
          </div>
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
              <a href="cv.pdf" title="download cv" download>
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
