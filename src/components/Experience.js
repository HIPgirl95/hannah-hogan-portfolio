import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { BsBriefcase, BsGeoAlt } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience" className="experience-section py-5 bg-light">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Work Experience</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            My professional journey and the companies I've worked with.
          </p>
        </div>

        <div className="timeline">
          {/* Job 1 */}
          <Row className="mb-5 position-relative timeline-item">
            <Col
              lg={{ span: 6, offset: 6 }}
              md={{ span: 8, offset: 4 }}
              className="position-relative"
            >
              <div className="timeline-marker">
                <BsBriefcase size={20} />
              </div>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 fw-bold mb-0">Senior Developer</h3>
                    <Badge bg="primary" className="date-badge">
                      2020 - Present
                    </Badge>
                  </div>
                  <h4 className="h6 fw-bold mb-2">TechCorp Inc.</h4>
                  <div className="d-flex align-items-center text-secondary mb-3">
                    <BsGeoAlt className="me-1" /> San Francisco, CA
                  </div>
                  <p className="text-secondary">
                    Led a team of 5 developers in building enterprise-level web
                    applications. Implemented CI/CD pipelines and improved
                    application performance by 40%.
                  </p>
                  <div className="mt-3">
                    <Badge bg="primary" className="me-1">
                      React
                    </Badge>
                    <Badge bg="success" className="me-1">
                      Node.js
                    </Badge>
                    <Badge bg="info">AWS</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Job 2 */}
          <Row className="mb-5 position-relative timeline-item">
            <Col lg={6} md={8} className="position-relative">
              <div className="timeline-marker timeline-marker-left">
                <BsBriefcase size={20} />
              </div>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 fw-bold mb-0">Full Stack Developer</h3>
                    <Badge bg="success" className="date-badge">
                      2018 - 2020
                    </Badge>
                  </div>
                  <h4 className="h6 fw-bold mb-2">WebSolutions LLC</h4>
                  <div className="d-flex align-items-center text-secondary mb-3">
                    <BsGeoAlt className="me-1" /> Seattle, WA
                  </div>
                  <p className="text-secondary">
                    Developed and maintained multiple client websites and web
                    applications. Collaborated with designers to implement
                    responsive UI/UX designs.
                  </p>
                  <div className="mt-3">
                    <Badge bg="primary" className="me-1">
                      Angular
                    </Badge>
                    <Badge bg="success" className="me-1">
                      Express
                    </Badge>
                    <Badge bg="info">MongoDB</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Job 3 */}
          <Row className="position-relative timeline-item">
            <Col
              lg={{ span: 6, offset: 6 }}
              md={{ span: 8, offset: 4 }}
              className="position-relative"
            >
              <div className="timeline-marker">
                <BsBriefcase size={20} />
              </div>
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h3 className="h5 fw-bold mb-0">Junior Web Developer</h3>
                    <Badge bg="info" className="date-badge">
                      2016 - 2018
                    </Badge>
                  </div>
                  <h4 className="h6 fw-bold mb-2">Digital Creations</h4>
                  <div className="d-flex align-items-center text-secondary mb-3">
                    <BsGeoAlt className="me-1" /> Portland, OR
                  </div>
                  <p className="text-secondary">
                    Started as an intern and grew into a full-time role. Built
                    and maintained client websites, fixed bugs, and implemented
                    new features.
                  </p>
                  <div className="mt-3">
                    <Badge bg="primary" className="me-1">
                      JavaScript
                    </Badge>
                    <Badge bg="success" className="me-1">
                      PHP
                    </Badge>
                    <Badge bg="info">MySQL</Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
