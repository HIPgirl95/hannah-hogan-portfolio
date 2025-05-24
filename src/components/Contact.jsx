import { useRef } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  BsEnvelope,
  BsLinkedin,
  BsGithub,
  BsCheckCircleFill,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const ServiceID = process.env.REACT_APP_SERVICE_ID;
const TemplateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(ServiceID, TemplateID, form.current, publicKey)
      .then(() => {
        toast.success("Message sent!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Something went wrong.");
      });
  };

  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Let's Work Together</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </div>

        <Row>
          <Col lg={7} className="mb-4 mb-lg-0">
            <Card className="border-primary border-opacity-25 shadow-sm">
              <Card.Header className="bg-transparent border-0 pt-4 px-4">
                <Card.Title className="h4">Send Me a Message</Card.Title>
                <Card.Subtitle className="text-secondary mb-0">
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="Your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Project inquiry"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="Your message"
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <div className="d-flex flex-column h-100">
              <Card className="mb-4 border-success border-opacity-25 shadow-sm">
                <Card.Header className="bg-transparent border-0 pt-4 px-4">
                  <Card.Title className="h4">Contact Information</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <BsEnvelope size={20} className="text-success" />
                    </div>
                    <div>
                      <h5 className="h6 fw-bold">Email</h5>
                      <p className="text-secondary mb-0">
                        hannah@internetworkflow.com
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <BsLinkedin size={20} className="text-success" />
                    </div>
                    <div>
                      <h5 className="h6 fw-bold">LinkedIn</h5>
                      <a
                        href="https://www.linkedin.com/in/hannah-i-hogan/"
                        className="text-secondary mb-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.linkedin.com/in/hannah-i-hogan/
                      </a>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-3">
                      <BsGithub size={20} className="text-success" />
                    </div>
                    <div>
                      <h5 className="h6 fw-bold">GitHub</h5>
                      <a
                        href="https://github.com/HIPgirl95"
                        className="text-secondary mb-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/HIPgirl95
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>

              <Card className="border-info border-opacity-25 shadow-sm">
                <Card.Header className="bg-transparent border-0 pt-4 px-4">
                  <Card.Title className="h4">Availability</Card.Title>
                </Card.Header>
                <Card.Body>
                  <p>Currently available for:</p>
                  <ul className="list-unstyled">
                    <li className="d-flex align-items-center mb-2">
                      <BsCheckCircleFill className="text-success me-2" />
                      Full-time positions
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <BsCheckCircleFill className="text-success me-2" />
                      Freelance projects
                    </li>
                    <li className="d-flex align-items-center">
                      <BsCheckCircleFill className="text-success me-2" />
                      Remote work
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
}

export default Contact;
