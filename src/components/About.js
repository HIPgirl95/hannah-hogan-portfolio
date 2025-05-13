import { Container, Row, Col, Badge } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section py-5 bg-light">
      <Container className="py-5">
        <div className="text-center mb-5">
          <Badge
            bg="light"
            text="secondary"
            className="mb-2 px-3 py-2 border border-secondary"
          >
            About Me
          </Badge>
          <h2 className="display-5 fw-bold">My Journey as a Developer</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            A passionate full stack developer with a focus on creating
            exceptional user experiences.
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="https://via.placeholder.com/600x600"
              alt="About me"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <p className="mb-4">
                I'm a full stack developer with a passion for building
                beautiful, functional, and user-friendly web applications. With
                expertise in both frontend and backend technologies, I create
                seamless experiences that solve real-world problems.
              </p>
              <p className="mb-4">
                My journey in web development started 5 years ago, and I've been
                continuously learning and improving my skills ever since. I
                enjoy working with modern frameworks and technologies, and I'm
                always excited to learn something new.
              </p>
              <Row>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Education</h3>
                  <p className="text-secondary">
                    B.S. Computer Science, University of Technology
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Location</h3>
                  <p className="text-secondary">San Francisco, CA</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
// This code defines a React functional component named "About" that renders an "About Me" section for a portfolio website.
// It uses Bootstrap for styling and layout. The section includes a title, a brief description, an image, and some personal information such as education and location.
