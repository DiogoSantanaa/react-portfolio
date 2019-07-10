import React, { Component } from "react";
import projeto1 from "../images/portfolio-images/thumbs/teste.jpg";
import projeto2 from "../images/portfolio-images/thumbs/nomeProjeto_thumb.jpg";
import projeto3 from "../images/portfolio-images/thumbs/nomeProjeto_thumb.jpg";

class Portfolio extends Component {
  state = {};
  render() {
    return (
      <section className="">
        <div className="container-fuild">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-margin portfolio">
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
                  Port <br />
                  <span className="title-second">
                    folio <span className="title-bar">/</span>
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-12 col-xs-12 ">
              <div className="conteudo">
                <a className="" data-toggle="modal" href="#portfolioModal1">
                  <div className="conteudo-overlay" />
                  <img className="img-fluid" src={projeto1} alt="" />
                  <div className="project-details fadeIn-bottom">
                    <i className="shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Camada_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 600 500"
                        style={{ enableBackground: "new 0 0 600 500" }}
                        xmlSpace="preserve"
                      >
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html: "\n\t.st0{fill:#D85D5D;}\n"
                          }}
                        />
                        <path
                          id="Caminho_8"
                          className="st0"
                          d="M600,500V152L0,361.7V500H600z"
                        />
                      </svg>
                    </i>
                    <h3 className="project-title">Roadcamper</h3>
                    <p className="project-subtitle">web responsive - 2018</p>
                    <p className="project-see">See project</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12 ">
              <div className="conteudo">
                <a className="" data-toggle="modal" href="#portfolioModal1">
                  <div className="conteudo-overlay" />
                  <img className="img-fluid" src={projeto1} alt="" />
                  <div className="project-details fadeIn-bottom">
                    <i className="shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Camada_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 600 500"
                        style={{ enableBackground: "new 0 0 600 500" }}
                        xmlSpace="preserve"
                      >
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html: "\n\t.st0{fill:#D85D5D;}\n"
                          }}
                        />
                        <path
                          id="Caminho_8"
                          className="st0"
                          d="M600,500V152L0,361.7V500H600z"
                        />
                      </svg>
                    </i>
                    <h3 className="project-title">Roadcamper</h3>
                    <p className="project-subtitle">web responsive - 2018</p>
                    <p className="project-see">See project</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12 ">
              <div className="conteudo">
                <a className="" data-toggle="modal" href="#portfolioModal1">
                  <div className="conteudo-overlay" />
                  <img className="img-fluid" src={projeto1} alt="" />
                  <div className="project-details fadeIn-bottom">
                    <i className="shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Camada_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 600 500"
                        style={{ enableBackground: "new 0 0 600 500" }}
                        xmlSpace="preserve"
                      >
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html: "\n\t.st0{fill:#D85D5D;}\n"
                          }}
                        />
                        <path
                          id="Caminho_8"
                          className="st0"
                          d="M600,500V152L0,361.7V500H600z"
                        />
                      </svg>
                    </i>
                    <h3 className="project-title">Roadcamper</h3>
                    <p className="project-subtitle">web responsive - 2018</p>
                    <p className="project-see">See project</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
