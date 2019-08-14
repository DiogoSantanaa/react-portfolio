import React, { Component } from "react";
import logo from "../images/logo-header/logo.png";
import cv from "../images/CV.pdf";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <section>
          <div className="contailer-fluid">
            <div className="row ">
              <div className="col-lg-4 col-md-4 col-margin text-center">
                <a href={cv} title="download cv" download>
                  <span className="footer-cv">
                    <i className="fas fa-long-arrow-alt-right " />
                    <span className="fontowesome-padding">
                      curriculum vitae
                    </span>
                  </span>
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-margin text-center">
                <ul>
                  <li>
                    <a href="tel:+351 962 350 734" title="ligar">
                      <span className="footer-number">+(351) 962 350 734</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:diogosantana1997@outlook.pt?subject=E-mail site"
                      title="Enviar e-mail"
                    >
                      <span className="footer-email">
                        diogosantana1997@outlook.pt
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-4 col-margin text-center">
                <ul>
                  <li>
                    <img src={logo} alt="logo" width="45" />
                  </li>
                  <li className="footer-name">© Diogo Santana</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
