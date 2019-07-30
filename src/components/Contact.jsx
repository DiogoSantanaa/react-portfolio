import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Input } from "reactstrap";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      subject: null,
      message: null,
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Name: ${this.state.name}
        Email: ${this.state.email}
        Subject: ${this.state.subject}
        Message: ${this.state.Message}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "subject":
        formErrors.subject =
          value.length < 5 ? "Minimum 5 characaters required" : "";
        break;
      case "message":
        formErrors.message =
          value.length < 20 ? "Minimum 20 characaters required" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
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
            <Form onSubmit={this.handleSubmit} noValidate>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      placeholder="Name"
                      type="text"
                      name="name"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.name.length > 0 && (
                      <span className="errorMessage">{formErrors.name}</span>
                    )}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email :"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="errorMessage">{formErrors.email}</span>
                    )}
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Input
                  type="text"
                  name="subject"
                  id="exampleSubject"
                  placeholder="Subject :"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.subject.length > 0 && (
                  <span className="errorMessage">{formErrors.subject}</span>
                )}
              </FormGroup>

              <FormGroup>
                <Input
                  type="text"
                  name="message"
                  id="exampleMessage"
                  placeholder="Message :"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.message.length > 0 && (
                  <span className="errorMessage">{formErrors.message}</span>
                )}
              </FormGroup>

              <FormGroup className="text-right">
                <Button onClick={this.sendEmail}>Send >></Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
