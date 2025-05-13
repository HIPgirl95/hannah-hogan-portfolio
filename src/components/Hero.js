import { Container, Row, Col, Button } from "react-bootstrap";
import {
  BsArrowRight,
  BsDownload,
  BsGithub,
  BsLinkedin,
  BsEnvelope,
} from "react-icons/bs";

function Hero() {
  return (
    <section id="home" className="hero-section py-5">
      <Container className="py-5">
        <Row className="align-items-center py-5">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="mb-4">
              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-primary">Alex</span>
                <br />
                Full Stack Developer
              </h1>
              <p className="lead text-secondary mb-4">
                I build responsive, user-friendly web applications with modern
                technologies.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Button
                  variant="primary"
                  href="#projects"
                  className="d-flex align-items-center"
                >
                  View My Work <BsArrowRight className="ms-2" />
                </Button>
                <Button
                  variant="outline-primary"
                  href="/resume.pdf"
                  target="_blank"
                  className="d-flex align-items-center"
                >
                  <BsDownload className="me-2" /> Resume
                </Button>
              </div>
              <div className="d-flex gap-3 social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <BsGithub size={24} />
                  <span className="visually-hidden">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <BsLinkedin size={24} />
                  <span className="visually-hidden">LinkedIn</span>
                </a>
                <a href="mailto:hello@example.com" className="text-secondary">
                  <BsEnvelope size={24} />
                  <span className="visually-hidden">Email</span>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero-image-container">
              <img
                src="/images/KeilaWedding.jpg"
                alt="Developer portrait"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
