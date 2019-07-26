import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Input, FormText } from "reactstrap";

class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="">
        <div className="container-fuild">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="h1-margin contact">
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
                  Con <br />
                  <span className="title-second">
                    tact <span className="title-bar">/</span>
                  </span>
                </span>
              </h1>
            </div>
          </div>

          <div className="email">
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      id="exampleName"
                      placeholder="Name :"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email :"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Input
                  type="text"
                  name="subject"
                  id="exampleSubject"
                  placeholder="Subject :"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="message"
                  id="exampleMessage"
                  placeholder="Message :"
                />
              </FormGroup>

              <FormGroup className="text-right">
                <Button>Send >></Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
