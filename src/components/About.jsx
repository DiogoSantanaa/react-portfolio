import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <section className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-margin">
                <i className="icon waves">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Camada_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 54 12"
                    style={{ enableBackground: "new 0 0 54 12" }}
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\t.st0{fill:none;stroke:#D85D5D;stroke-width:6;}\n"
                      }}
                    />
                    <path
                      id="Caminho_2"
                      className="st0"
                      d="M2,8.29l7.66-4.58l7.01,4.58l9.81-4.58l9.34,4.58l8.13-4.58L52,8.29"
                    />
                  </svg>
                </i>
                <span className="title-first">
                  About <br />
                  <span className="title-second">
                    me <span className="title-bar">/</span>
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className="description-title">
                An little <span className="cool-font">overview </span>
                <br />
                Of me <span className="description-bar">/</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="description">
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
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="work">
                    <h3 className="work-title">
                      <i className="icon waves">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Camada_1"
                          x="0px"
                          y="0px"
                          viewBox="0 0 54 12"
                          style={{ enableBackground: "new 0 0 54 12" }}
                          xmlSpace="preserve"
                        >
                          <path
                            id="Caminho_2"
                            className="st1"
                            d="M2,8.29l7.66-4.58l7.01,4.58l9.81-4.58l9.34,4.58l8.13-4.58L52,8.29"
                          />
                        </svg>
                      </i>
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
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="work">
                    <h3 className="work-title">
                      <i className="icon waves">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Camada_3"
                          x="0px"
                          y="0px"
                          viewBox="0 0 54 12"
                          style={{ enableBackground: "new 0 0 54 12" }}
                          xmlSpace="preserve"
                        >
                          <style
                            type="text/css"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n\t.st1{fill:none;stroke:#ffffff;stroke-width:6;}\n"
                            }}
                          />
                          <path
                            id="Caminho_3"
                            className="st1"
                            d="M2,8.29l7.66-4.58l7.01,4.58l9.81-4.58l9.34,4.58l8.13-4.58L52,8.29"
                          />
                        </svg>
                      </i>
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
          </div>
        </div>
      </section>
    );
  }
}

export default About;
