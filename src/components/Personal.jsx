import { Container, Row, Col, Card } from "react-bootstrap";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuHeartHandshake } from "react-icons/lu";
import { HiOutlineLightBulb } from "react-icons/hi2";

function Personal() {
  return (
    <section id="personal" className="personal-section py-5">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">
            <span className="colored-text">Beyond</span> Coding
          </h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Get to know me outside of my professional life.
          </p>
        </div>

        <Row>
          {/* Hobbies & Interests */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 project-card border-opacity-25">
              <Card.Header className="bg-primary bg-opacity-10 d-flex align-items-center">
                <IoGameControllerOutline
                  className="colored-text me-2"
                  size={20}
                />
                <h3 className="h5 mb-0 fw-bold">Hobbies & Interests</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h4 className="h6 fw-bold colored-text">Gaming</h4>
                  <p>
                    I have a passion for gaming, with very few exceptions. I
                    enjoy card and board games, as well as video games and
                    tabletop RPGs. I love the strategy and creativity involved
                    in these games, and I often play with friends and family.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="h6 fw-bold colored-text">Music</h4>
                  <p>
                    I have a deep appreciation for music and love to break down
                    songs and discuss them in depth. While I don't play an
                    instrument, I love to sing, and I have dabbled in a few
                    different intruments.
                  </p>
                </div>
                <div>
                  <h4 className="h6 fw-bold colored-text">Reading</h4>
                  <p>
                    I have always loved reading, and I enjoy a wide variety of
                    genres, including fantasy, science fiction, and non-fiction.
                    I love getting lost in a good book and exploring new worlds
                    and ideas.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Values */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 project-card border-opacity-25">
              <Card.Header className="bg-primary bg-opacity-10 d-flex align-items-center">
                <LuHeartHandshake className="colored-text me-2" size={20} />
                <h3 className="h5 mb-0 fw-bold">Values</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h4 className="h6 fw-bold colored-text">
                    Continuous Learning
                  </h4>
                  <p>
                    With my background in education, I believe in the importance
                    of lifelong learning. I am always looking for opportunities
                    to learn more and ask questions. I truly believe that there
                    is no such thing as a stupid question.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="h6 fw-bold colored-text">Collaboration</h4>
                  <p>
                    I believe the best results come from diverse teams working
                    together with open communication. I am always looking for
                    ways to improve my communication skills and learn how to
                    better be a team player.
                  </p>
                </div>
                <div>
                  <h4 className="h6 fw-bold colored-text">
                    Dedication and Hardwork
                  </h4>
                  <p>
                    I take commitment seriously and always strive to give my
                    best effort. I believe that hard work and dedication are key
                    to the success of any project.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Fun Facts */}
          <Col lg={4} md={6} className="mb-4">
            <Card className="h-100 project-card border-opacity-25">
              <Card.Header className="bg-primary bg-opacity-10 d-flex align-items-center">
                <HiOutlineLightBulb className="colored-text me-2" size={20} />
                <h3 className="h5 mb-0 fw-bold">Fun Facts</h3>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <h4 className="h6 fw-bold colored-text">Learning Korean</h4>
                  <p>
                    In high school, I fell in love with Korean culture through
                    their music and dramas. I was able to take a few classes in
                    college, and I am now self-studying. I love the challenge of
                    learning a new language and the opportunity to connect with
                    a different culture.
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="h6 fw-bold colored-text">Homeschooled</h4>
                  <p>
                    I was homeschooled from kindergarten through high school.
                    This experience taught me to be self-motivated and
                    independent, setting my own goals and working towards them.
                  </p>
                </div>
                <div>
                  <h4 className="h6 fw-bold colored-text">Volunteering</h4>
                  <p>
                    I helped drill a freshwater well for a village in El
                    Salvador. It was hot, messy, and one of the most rewarding
                    things I’ve ever done. That experience showed me how
                    meaningful problem-solving can be—especially when it makes a
                    real difference in people’s lives.
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
