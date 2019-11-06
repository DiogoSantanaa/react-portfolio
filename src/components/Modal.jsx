import React from "react";

//import { projects } from "./ProjectDetails";

const Modal = props => {
  function displayInfo() {
    switch (props.modalInfo) {
      case "Modal A":
        return (
          <div>
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
                    Roadcamper <span className="modal-title-bar">/</span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="row modal-margin">
              <div className="col-lg-8 col-md-8 col-xs-12 description-margin">
                <h6 className="modal-description">
                  Roadcamper is a company that fixes all types of motorhomes,
                  you can see their  specialties,  browse through
                  the recent projects that they made has well has search For a
                  specific type of work.
                  <br />
                  In the end you can see the brands that they work with and
                  send an e-mail or just call them.
                </h6>
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
                  onClick={() => window.open("https://roadcamper.netlify.com/")}
                >
                  Live Demo
                </button>
                <br />
                <button
                  className="btn-github"
                  onClick={() =>
                    window.open("https://github.com/DiogoSantanaa/roadcamper")
                  }
                  target="_blank"
                >
                  GitHub Repo
                </button>
              </div>

              <div className="col-lg-12 text-center">
                <div className="img-modal-margin">
                  <img
                    className="img-fluid"
                    src={require(`../images/modal/work-gif/roadcamper.gif`)}
                    alt="Portfolio"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "Modal B":
        return (
          <div>
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
                    Inforarte <span className="modal-title-bar">/</span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="row modal-margin">
              <div className="col-lg-8 col-md-8 col-xs-12 description-margin">
                <h6 className="modal-description">
                  Inforarte is a company of publicity and with this site you can
                  browse through their story, see what they have to offer in
                  terms of services, see their portfolio and then you can send
                  them a budget request. <br />
                  In the contact page you can see their phones numbers, email
                  them and see where it is located the office or the atelier.
                </h6>
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
                  onClick={() => window.open("https://inforarte.netlify.com/")}
                >
                  Live Demo
                </button>
                <br />
                <button
                  className="btn-github"
                  onClick={() =>
                    window.open("https://github.com/DiogoSantanaa/inforarte")
                  }
                  target="_blank"
                >
                  GitHub Repo
                </button>
              </div>

              <div className="col-lg-12 text-center">
                <div className="img-modal-margin">
                  <img
                    className="img-fluid"
                    src={require(`../images/modal/work-gif/inforarte.gif`)}
                    alt="Portfolio"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "Modal C":
        return (
          <div>
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
                    Diogo Portfólio <span className="modal-title-bar">/</span>
                  </span>
                </h2>
              </div>
            </div>
            <div className="row modal-margin">
              <div className="col-lg-8 col-md-8 col-xs-12 description-margin">
                <h6 className="modal-description">
                  This website was made to share my projects has a frontend web
                  developer. On the opening page you can download right away my
                  CV, following you can see a brief description of what I do,
                  next you have my recent works that I made with open a page
                  with a brief description like this one and then you can see
                  the Git repository or a live demo. <br />
                  If you wish to contact me just scroll to the contact zone or
                  click the message icon on the right side of the screen (if you
                  are on a desktop).
                </h6>
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
                    react
                  </li>
                  <li className="list-text">
                    <span className="modal-technologies-bar">/ </span>
                    bootstrap
                  </li>
                  <li className="list-text">
                    <span className="modal-technologies-bar">/ </span>
                    jQuery
                  </li>
                </ul>
                <button
                  className="btn-demo"
                  target="_blank"
                  onClick={() => window.open("https://diogo-santana.tk/")}
                >
                  Live Demo
                </button>
                <br />
                <button
                  className="btn-github"
                  onClick={() =>
                    window.open(
                      "https://github.com/DiogoSantanaa/react-portfolio"
                    )
                  }
                  target="_blank"
                >
                  GitHub Repo
                </button>
              </div>

              <div className="col-lg-12 text-center">
                <div className="img-modal-margin">
                  <img
                    className="img-fluid"
                    src={require(`../images/modal/work-gif/portfolio.gif`)}
                    alt="Portfolio"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  function closeModal(e) {
    e.stopPropagation();
    props.closeModal();
  }

  const divStyle = {
    display: props.displayModal ? "block" : "none"
  };

  return (
    <div className="modal" onClick={closeModal} style={divStyle}>
      <div className="container-fluid modal-fluid">
        {/* close modal */}
        <div className="row">
          <div
            className="col-lg-12 text-right"
            onClick={e => e.stopPropagation()}
          >
            <i className="icon close" onClick={closeModal}>
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
                <line className="st1" x1={2.2} y1={2.2} x2={47.48} y2={47.48} />
                <line className="st1" x1={2.2} y1={47.48} x2={47.48} y2={2.2} />
              </svg>
            </i>
          </div>
        </div>
      </div>
      {displayInfo()}
    </div>
  );
};

export default Modal;
