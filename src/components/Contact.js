import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import {
  BsEnvelope,
  BsLinkedin,
  BsGithub,
  BsCheckCircleFill,
} from "react-icons/bs";

function Contact() {
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
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Project inquiry" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your message"
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
                      <p className="text-secondary mb-0">hello@example.com</p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <div className="me-3">
                      <BsLinkedin size={20} className="text-success" />
                    </div>
                    <div>
                      <h5 className="h6 fw-bold">LinkedIn</h5>
                      <p className="text-secondary mb-0">
                        linkedin.com/in/yourprofile
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="me-3">
                      <BsGithub size={20} className="text-success" />
                    </div>
                    <div>
                      <h5 className="h6 fw-bold">GitHub</h5>
                      <p className="text-secondary mb-0">
                        github.com/yourusername
                      </p>
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
    </section>
  );
}

export default Contact;
