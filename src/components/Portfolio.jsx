import React, { Component } from "react";
import Modal from "react-modal";

import { enableRipple } from "@syncfusion/ej2-base";

enableRipple(true);

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }

  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const works = [
      {
        id: 1,
        title: "Roadcamper",
        substitle: "web responsive - 2018",
        image: "teste",
        modal: "portfolioModal1",
        git: "https://github.com/DiogoSantanaa/roadcamper",
        demo: "www.roadcamper.pt/",
        gif: "roadcamper",
        description:
          "Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so. Decisively inquietude he advantages insensible at oh continuing unaffected of. "
      },
      {
        id: 2,
        title: "Inforarte",
        substitle: "web responsive - 2018",
        image: "teste",
        modal: "portfolioModal2",
        git: "https://github.com/DiogoSantanaa/inforarte",
        demo: "www.google.pt",
        gif: "roadcamper",
        description:
          "Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so. Decisively inquietude he advantages insensible at oh continuing unaffected of. "
      },
      {
        id: 3,
        title: "Diogo Portfólio",
        substitle: "React.js - 2019",
        image: "teste",
        modal: "portfolioModal3",
        git: "https://github.com/DiogoSantanaa/react-portfolio",
        demo: "https://diogo-santana.tk/",
        gif: "roadcamper",
        description:
          "Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so. Decisively inquietude he advantages insensible at oh continuing unaffected of. "
      }
    ];

    const projects = works.map(work => {
      // this will this code for each word of the array menu
      return (
        <div className="col-lg-4 col-sm-12 col-xs-12 " key={work.id}>
          <div className="conteudo">
            <button
              className=""
              onClick={this.toggleModal}
              href={"#" + work.modal}
            >
              <div className="conteudo-overlay" />
              <img
                className="img-fluid"
                src={require(`../images/portfolio-images/thumbs/${
                  work.image
                }.jpg`)}
                alt=""
              />
              <img className="img-fluid" src={work.image} alt="" />
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
                <h3 className="project-title">{work.title}</h3>
                <p className="project-subtitle">{work.substitle}</p>
                <p className="project-see">See project</p>
              </div>
            </button>
          </div>

          <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
            <div className="">
              <div className="container-fluid">
                {/* close modal */}
                <div className="row">
                  <div className="col-lg-12 text-right">
                    <i className="icon close" onClick={this.toggleModal}>
                      <svg
                        version="1.1"
                        id="Camada_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 50 50"
                        style={{ enableBackground: "new 0 0 50 50" }}
                        xmlSpace="preserve"
                      >
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n\t.st1{fill:none;stroke:#707070;stroke-width:2;stroke-miterlimit:10;}\n"
                          }}
                        />
                        <line
                          className="st1"
                          x1={2.2}
                          y1={2.2}
                          x2={47.48}
                          y2={47.48}
                        />
                        <line
                          className="st1"
                          x1={2.2}
                          y1={47.48}
                          x2={47.48}
                          y2={2.2}
                        />
                      </svg>
                    </i>
                  </div>
                </div>

                {/* modal title */}
                <div className="row modal-margin">
                  <div className="col-lg-12">
                    <h2 className="h2-margin">
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
                      <span className="modal-title">
                        {work.title} <span className="modal-title-bar">/</span>
                      </span>
                    </h2>
                  </div>
                </div>
                {/* modal description and technologies */}
                <div className="row modal-margin">
                  <div className="col-lg-8 col-md-8 col-xs-12 description-margin">
                    <h6 className="modal-description">{work.description}</h6>
                  </div>

                  <div className="col-lg-2 col-md-2 col-xs-12 description-margin">
                    <h4 className="modal-technologies">technologies</h4>
                    <ul className="a">
                      <li className="list-text text-left">
                        <span className="modal-technologies-bar">/ </span>html
                      </li>
                      <li className="list-text">
                        <span className="modal-technologies-bar">/ </span>css
                      </li>
                      <li className="list-text">
                        <span className="modal-technologies-bar">/ </span>
                        bootstrap
                      </li>
                    </ul>
                    <button
                      className="btn-demo"
                      target="_blank"
                      onClick={() => window.open(work.demo)}
                    >
                      Live Demo
                    </button>
                    <br />
                    <button
                      className="btn-github"
                      onClick={() => window.open(work.git)}
                      target="_blank"
                    >
                      GitHub Repo
                    </button>
                  </div>

                  <div className="col-lg-12 text-center">
                    <div className="img-modal-margin">
                      <img
                        className="img-fluid"
                        src={require(`../images/modal/work-gif/${
                          work.gif
                        }.gif`)}
                        alt="Portfolio"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      );
    });

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

          <div className="row">{projects} </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
