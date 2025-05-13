import { Container, Row, Col, Card } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";

function Personal() {
  return (
    <section id="personal" className="personal-section py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Beyond Coding</h2>
          <p
            className="lead text-secondary mx-auto"
            style={{ maxWidth: "700px" }}
          >
            Get to know me outside of my professional life.
          </p>
        </div>

        <Row>
          {/* Hobbies & Interests */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-primary border-opacity-25">
              <Card.Header className="bg-primary bg-opacity-10 d-flex align-items-center">
                <BsPerson className="text-primary me-2" size={20} />
                <h3 className="h5 mb-0 fw-bold">Hobbies & Interests</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h4 className="h6 fw-bold">Photography</h4>
                  <p className="text-secondary">
                    I'm an avid landscape photographer and enjoy capturing
                    nature's beauty during my travels.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="h6 fw-bold">Rock Climbing</h4>
                  <p className="text-secondary">
                    I've been rock climbing for 3 years and love the
                    problem-solving aspect of bouldering.
                  </p>
                </div>
                <div>
                  <h4 className="h6 fw-bold">Reading</h4>
                  <p className="text-secondary">
                    I enjoy science fiction and non-fiction books about
                    technology and psychology.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Values */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-success border-opacity-25">
              <Card.Header className="bg-success bg-opacity-10 d-flex align-items-center">
                <BsPerson className="text-success me-2" size={20} />
                <h3 className="h5 mb-0 fw-bold">Values</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h4 className="h6 fw-bold">Continuous Learning</h4>
                  <p className="text-secondary">
                    I believe in lifelong learning and constantly expanding my
                    knowledge and skills.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="h6 fw-bold">Work-Life Balance</h4>
                  <p className="text-secondary">
                    I value maintaining a healthy balance between professional
                    achievements and personal well-being.
                  </p>
                </div>
                <div>
                  <h4 className="h6 fw-bold">Collaboration</h4>
                  <p className="text-secondary">
                    I believe the best results come from diverse teams working
                    together with open communication.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Fun Facts */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 border-info border-opacity-25">
              <Card.Header className="bg-info bg-opacity-10 d-flex align-items-center">
                <BsPerson className="text-info me-2" size={20} />
                <h3 className="h5 mb-0 fw-bold">Fun Facts</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h4 className="h6 fw-bold">Traveled to 15 Countries</h4>
                  <p className="text-secondary">
                    I love experiencing different cultures and have visited 15
                    countries across 4 continents.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="h6 fw-bold">Amateur Chef</h4>
                  <p className="text-secondary">
                    I enjoy cooking international cuisines and hosting dinner
                    parties for friends.
                  </p>
                </div>
                <div>
                  <h4 className="h6 fw-bold">Former Band Member</h4>
                  <p className="text-secondary">
                    I played bass guitar in a local indie rock band during
                    college.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Personal;
