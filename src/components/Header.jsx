import React, { Component } from "react";
// import { Animated } from "react-animated-css";
import cv from "../images/CV.pdf";
class Header extends Component {
  render() {
    return (
      <header id="Home">
        <section className="bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12  text-center">
                <div className="align-text-header">
                  <h1>
                    <span className="title-hello">Hello</span>

                    <br />

                    <span className="title-there">There</span>
                    <span className="title-bar-header">/</span>
                  </h1>

                  <p className="header-subtitle text-center">
                    My name is Diogo Santana
                  </p>
                  <p className="header-subtitle1 text-center">
                    Web developer
                  </p>
                  <a href={cv} title="download cv" download>
                    <span className="header-cv">curriculum vitae</span>
                  </a>
                </div>
              </div>
              <span className="header-scroll">
                <i className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="18"
                    viewBox="0 0 17 10"
                  >
                    <path
                      className="cls-1"
                      d="M6.22,8.75,3.37,5.89H17V4.12H3.37L6.22,1.25,5,0,0,5l5,5Z"
                    />
                  </svg>
                </i>
                <span className="scroll-txt">scroll</span>
              </span>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
