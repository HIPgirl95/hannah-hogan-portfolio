import { Container, Row, Col } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

function Footer() {
  return (
    <footer className="py-4 border-top">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div className="fw-bold fs-4 mb-1">
              <span className="text-primary">Dev</span>Portfolio
            </div>
            <p className="text-secondary small mb-0">
              &copy; {new Date().getFullYear()} Alex Developer. All rights
              reserved.
            </p>
          </Col>
          <Col md={6}>
            <ul className="list-inline text-center text-md-end mb-0">
              <li className="list-inline-item me-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <BsGithub size={20} />
                  <span className="visually-hidden">GitHub</span>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary"
                >
                  <BsLinkedin size={20} />
                  <span className="visually-hidden">LinkedIn</span>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="mailto:hello@example.com" className="text-secondary">
                  <BsEnvelope size={20} />
                  <span className="visually-hidden">Email</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
