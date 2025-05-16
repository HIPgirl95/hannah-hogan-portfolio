import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section py-5 bg-light">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">My Journey as a Developer</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            A full stack developer with a strong foundation in math and science
            education, dedicated to crafting seamless, meaningful user
            experiences.
          </p>
        </div>

        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="/images/C.jpg"
              alt="About me"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col lg={6}>
            <div className="ps-lg-4">
              <p className="mb-4">
                I am a former teacher turned Full-Stack Developer. After several
                years teaching a variety of subjects and age groups, I decided
                to pivot my career to pursue my passion for math, logic, and
                problem-solving. Teaching has given me invaluable skills in
                communication, adaptability, and perseverance, and I bring these
                qualities to my new journey in tech.
              </p>
              <p className="mb-4">
                I’m excited to dive headfirst into a new industry and
                collaborate on projects that both challenge and inspire me. I’m
                looking for a role where I can continue to grow as a developer
                while contributing to meaningful work. If you’re looking for a
                determined, adaptable, and eager team member with a unique
                perspective, let’s connect!
              </p>
              <Row>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Education</h3>
                  <p className="text-secondary">
                    Bachelor of Science | Physics Education
                  </p>
                </Col>
                <Col md={6}>
                  <h3 className="h5 fw-bold">Location</h3>
                  <p className="text-secondary">
                    Georgia State University | Atlanta, GA
                  </p>
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
