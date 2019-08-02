import React, { Component } from "react";
// import { Animated } from "react-animated-css";
import background from "../images/background.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={background} alt="bg" id="background" />
        <section className="bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="align-header-content">
                  <div className="align-text-header">
                    <h1>
                      <span className="title-hello">Hello</span>
                      <br />
                      <span className="title-there">There</span>
                      <span className="title-bar-header">/</span>
                    </h1>
                  </div>
                  <div className="align-text-header">
                    <p className="header-subtitle text-center">
                      My name is Diogo Santana
                    </p>
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
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
