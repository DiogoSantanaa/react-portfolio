import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h1>
                <i className="icon waves" />
                <span className="title-first">
                  About <br />
                  <span className="title-second">
                    me <span className="title-bar">/</span>
                  </span>
                </span>
              </h1>
              <div className="description">
                <p className="description-title">
                  An little <span className="cool-font">overview </span>
                  <br />
                  Of me <span className="description-bar">/</span>
                </p>
                <p className="description-subtext">
                  A key component of your transformation, your digital strategy
                  requires special attention. We provide you with the support
                  you need all during your project. Through regular workshops,
                  brainstormings and idea sharing, we help grow your initial
                  idea into a cutting-edge digital solution.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work">
                <h3 className="work-title">
                  <i className="icon waves" />
                  Design
                </h3>
                <p className="work-subtitle">
                  Web design
                  <br />
                  Branding
                  <br />
                  UI & UX
                </p>
              </div>
              <div className="work">
                <h3 className="work-title">
                  <i className="icon waves" />
                  Web Development
                </h3>
                <p className="work-subtitle">
                  Front end
                  <br />
                  Responsive design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
