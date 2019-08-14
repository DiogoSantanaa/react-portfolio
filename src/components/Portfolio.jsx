import React, { Component } from "react";
import Modal from "./Modal.jsx";

import { enableRipple } from "@syncfusion/ej2-base";

enableRipple(true);

class Portfolio extends Component {
  state = {
    modal: false,
    modalInfo: ""
  };

  selectModal = (info = "") => {
    this.setState({
      modal: !this.state.modal,
      modalInfo: info
    });
  };

  render() {
    const works = [
      {
        id: 1,
        title: "Roadcamper",
        substitle: "web responsive - 2018",
        image: "roadcamper",
        modal: "Modal A",
        git: "https://github.com/DiogoSantanaa/roadcamper",
        demo: "https://roadcamper.netlify.com/",
        gif: "roadcamper",
        description:
          "Roadcamper is a company that fixes all types of motorhomes, you can see their " +
          "specialties,  browse through the recent projects that they made has well has search " +
          "For a specific type of work. " +
          "In the end you can see the brands that they work with and send an e-mail or just call them."
      },
      {
        id: 2,
        title: "Inforarte",
        substitle: "web responsive - 2018",
        image: "inforarte",
        modal: "Modal B",
        git: "https://github.com/DiogoSantanaa/inforarte",
        demo: "https://inforarte.netlify.com/",
        gif: "inforarte",
        description:
          "Inforarte is a company of publicity and with this site you can browse through " +
          "their story, see what they have to offer in terms of services, see their portfolio " +
          "and then you can send them a budget request. In the contact page you can see their " +
          "phones numbers, email them and see where it is located the office or the atelier."
      },
      {
        id: 3,
        title: "Diogo Portfólio",
        substitle: "React.js - 2019",
        image: "portfolio",
        modal: "Modal C",
        git: "https://github.com/DiogoSantanaa/react-portfolio",
        demo: "https://diogo-santana.tk/",
        gif: "portfolio",
        description:
          "This website was made to share my projects has a frontend web developer." +
          "On the opening page you can download right away my CV, following you can see" +
          " a brief description of what I do, next you have my recent works that I made " +
          "with open a page with a brief description like this one and then you can see the" +
          " Git repository or a live demo. If you wish to contact me just scroll to the contact" +
          "zone or click the message icon on the right side of the screen (if you are on a desktop)."
      }
    ];
    const projects = works.map(work => {
      // this will this code for each word of the array menu
      return (
        <div className="col-lg-4 col-sm-12 col-xs-12 " key={work.id}>
          <div className="conteudo">
            <button className="" onClick={() => this.selectModal(work.modal)}>
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
                        __html: "\n\t.portfolio-svg{fill:#D85D5D;}\n"
                      }}
                    />
                    <path
                      id="Caminho_8"
                      className="portfolio-svg"
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
          <Modal
            displayModal={this.state.modal}
            modalInfo={this.state.modalInfo}
            closeModal={this.selectModal}
          />
        </div>
      );
    });

    return (
      <section>
        <div className="container-fuild">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-margin portfolio" id="Portfolio">
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

          <div className="row bar-padding">{projects} </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
