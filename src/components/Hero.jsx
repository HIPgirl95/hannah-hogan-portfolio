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
                Hi, I'm <span className="colored-text">Hannah</span>
                <br />
                Full Stack Developer
              </h1>
              <p className="lead mb-4">
                I build responsive, user-friendly web applications with modern
                technologies.
              </p>
              <p className="lead mb-4">Based out of Marietta, GA</p>
              <div className="d-flex flex-wrap gap-2 mb-4">
                <Button
                  href="#projects"
                  className="d-flex align-items-center colored-button"
                >
                  View My Work <BsArrowRight className="ms-2" />
                </Button>
                <Button
                  variant="outline"
                  href="/Hannah-Hogan-Resume.pdf"
                  target="_blank"
                  className="d-flex align-items-center outline-button"
                >
                  <BsDownload className="me-2" /> Resume
                </Button>
              </div>
              <div className="d-flex gap-3 social-links">
                <a
                  href="https://github.com/HIPgirl95/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="colored-logo"
                >
                  <BsGithub size={24} />
                  <span className="visually-hidden">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/hannah-i-hogan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="colored-logo"
                >
                  <BsLinkedin size={24} />
                  <span className="visually-hidden">LinkedIn</span>
                </a>
                <a
                  href="mailto:hannah@internetworkflow.com"
                  className="colored-logo"
                >
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
